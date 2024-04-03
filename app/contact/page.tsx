"use client"

import { getEarlyAccess } from '@/actions/get-early-access'
import ContactForm from '@/components/landing-page/contact-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ContactSchema } from '@/schemas/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import * as z from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from '@/components/ui/input'
import {  Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

const ContactUs = () => {

    const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPuzzleAssigned, setIsPuzzleAssigned] = useState<boolean>(false);
  const [isFormsubmittimg, setIsFormsubmittimg] = useState<boolean>(false);

  const reCAPtchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      currentSoftwareIntegration: "no",
    },
  });

  const handlePuzzleAssigned = async (token:string|undefined|null) => {
    if(token) {
      setIsPuzzleAssigned(false)
    } else {
      setIsPuzzleAssigned(true)
    }
  }

  const onSubmit = async (values: z.infer<typeof ContactSchema>) => {
    setIsFormsubmittimg(true);
    setError("");
    setSuccess("");

    const token = await reCAPtchaRef.current?.executeAsync();
    reCAPtchaRef.current?.reset();

    await handlePuzzleAssigned(token)

    getEarlyAccess(values, token!).then((data) => {
      console.log(data);

      setError(data.error);
      setSuccess(data.success);
      setIsFormsubmittimg(false);
    });
  };
  return (
    <div className='max-h-[100vh] flex items-center justify-center'>
      <Card className='h-[90%]  w-full lg:w-[80dvw] overflow-y-auto'>
        <CardHeader>
            <CardTitle className="lg:text-5xl">
            Contact Us
            </CardTitle>
            <CardDescription className="py-2 ">
            Thank you for your interest in GenAIConnect! We're excited to
                have you on board. Please provide us with some information to
                get started.
            </CardDescription>

            <CardContent className="p-0">
            {success ? (
              <div className="flex justify-center">
                Fom submitted succesfully
              </div>
            ) : (
              <>
                {isFormsubmittimg && (
                  <div className=" h-[inherit] w-full absolute flex items-center justify-center bg-[rgb(0,0,0,0.5)]">
                    loading...
                  </div>
                )}

                <Form {...form}>
                  <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="px-4 py-8 flex flex-col gap-4 overflow-y-auto"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {/* contact information */}
                    <div className="flex justify-between gap-8 flex-wrap lg:flex-nowrap">
                      <div className="w-full flex flex-col gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="John Doe" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="example@gmail.com"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="GenAI Connect" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Software Information */}
                      <div className="w-full flex flex-col gap-4">
                        <FormField
                          control={form.control}
                          name="softwareName"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel>Software Name</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="example" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="softwareType"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel>Software Type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue=""
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Enterprise">
                                    Enterprise
                                  </SelectItem>
                                  <SelectItem value="SaaS">SaaS</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="currentSoftwareIntegration"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>
                                Current Software Integration
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className=" font-normal">
                                      YES
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className=" font-normal">
                                      NO <small>(default)</small>
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Expectations Box */}
                    <div className="flex items-center justify-between gap-16">
                      <FormField
                        control={form.control}
                        name="expectations"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>
                              How do you envision using GenAIConnect in your
                              software?
                            </FormLabel>
                            <FormControl>
                              <Textarea onChange={field.onChange} rows={10} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <CardFooter className='px-0 flex justify-end'>
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        ref={reCAPtchaRef}
                        size="invisible"
                        badge="bottomleft"
                        onChange={handlePuzzleAssigned}
                       
                      />
                      <Button size="lg" type="submit">Get Early Access</Button>
                    </CardFooter>
                  </form>
                </Form>
              </>
            )}
            </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default ContactUs