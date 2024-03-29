
import { features } from "@/lib/data"
import { useEffect, useRef } from "react"


const Features = () => {
  const ref = useRef<HTMLDivElement>(null)
  
  const handleMouseMove = (event: MouseEvent) => {
    if (ref.current) {
      const x = event.clientX;
    const y = event.clientY;
      const rect = ref.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      console.log('Mouse X:', mouseX);
      console.log('Mouse Y:', mouseY);

      const offsetX = ((x - mouseX) / mouseX) * 10;
      const offsetY = ((y - mouseY) / mouseY) * 10;

      event
    }
  };

  useEffect(() => {
    const div = ref.current;
    if (div) {
      div.addEventListener('mousemove', handleMouseMove);
      return () => {
        div.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [ref]);
  
  return (
    <section id="features" className="py-[20dvh] text-center">

      <div>
        {features.map((feature, index) => (
          <div ref={ref} key={index}  className="py-4 flex flex-col justify-between">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features