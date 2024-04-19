This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Challenge Front End

(https://danimartinez-portfolio.vercel.app/)

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project is an SPA that showcases products from a JSON file. It was built using TailwindCSS, TypeScript, and Framer Motion for animations. The project follows Next.js conventions for routing and includes custom 404 screens.

# Features

- Responsive Design: The landing page is fully responsive using TailwindCSS breakpoints.
- Dynamic Data: Products are fetched from a JSON file and displayed dynamically.
- Animations: Smooth animations powered by Framer Motion.
- Custom Layout: A Layout component is used for shared components such as the Header and sidebar.
  Tech Stack
- Framework: Next.js
- Styling: TailwindCSS
- Animations: Framer Motion
- Types: TypeScript

- Indicar tiempo de resolución (t): 8 horas
- Indicar disponibilidad semanal (d):24 horas semanales

# Instrucciones:

El objetivo es desarrollar un SPA que tiene 3 tipos de vista definidas en el siguiente prototipo: https://www.figma.com/file/i1OsJbAApraN9W97rSnq9z/Online-Course-Dashboard-UI-Kit?type=design&node-id=1%3A3&mode=design&t=EXzxgCI0AnyQ8r3y-1

- En la ruta {localhost}/explora se debe ver la página que en figma esta nombrada como Light - Online Course Searching Course
- La ruta {localhost}/ debe redirigir a {localhost}/explora
  crear componente error.tsx de acuerdo a las convenciones de next js para app routing: https://nextjs.org/docs/app/api-reference/file-conventions. debe verse como la página Light - page not found, del figma.
- la ruta {localhost}/error-forzado es un componente que renderiza un span que dice 'soy un error forzado' que no debe alcanzarse a visualizar ya que que solo que genere un error intencional que haga que next js renderize el componente error.tsx
  crear componente not-found.tsx de acuerdo a las convenciones de next js para app routing: https://nextjs.org/docs/app/api-reference/file-conventions. debe verse como la página Light - internal server error, del figma.
- Toda ruta diferente a las que se han indicado previamente deben renderizar not-found.tsx

# Requerimientos.

- Tener la navegación completa con todas las rutas previamente definidas.
- Desarrollar el responsive, configuraciones de color, tipografía y espaciados con tailwind, con los breakpoints que tiene por defecto.
- Maquetar un layout para que el menú lateral y superior aparezcan en todas las páginas.
- El responsive de mobile es el mismo que web pero sin los títulos en los menús y tiene grillas de máximo dos columnas.
- Ninguno de los botones, íconos, o menùs tiene tiene funcionalidades.
- La página donde se listan los productos (/explora) debe cargar primero la parte asíncrona mientras se hace un streaming de los productos durante el tiempo que tarde en resolverse la promesa de la función getAllProducts. Entonces durante el tiempo de la resolución de la promesa se debe renderizar el componente loading.tsx de acuerdo a las convenciones de next js para app routing.
- Indicar tiempo de resolución (t): A continuación ponga la cantidad de horas que demoró haciendo la prueba -> // n horas
- Indicar disponibilidad semanal (d): Ponga a continuación la cantidad de horas semanales aproximadas de disponibilidad semanal -> // n horas semanales

Criterios de evaluación

- Cumplir con los requerimientos.
- Fidelidad del desarrollo con el prototipo y que sea responsive.
- Todo debe estar debidamente tipado, los any implícitos o tipar con any afectarán la evaluación.
- Componentes de responsabilidad única, un codigo que se lea por si mismo sin necesidad de comentarios y que no halla duplicidad de código.

Extra

- Usar imágenes en los productos en vez de un cuadro de color blanco.
- Proponer interacciones que aporten a la experiencia de usuario, pero que no afecten el performance y la fidelidad del prototipo.

Que se evalúa el candidato seleccionado

- Bajo 2 criterios:

1. Calidad de código y cumplimiento del requerimiento
2. Capacidad (c): La proporción entre el tiempo de disponibilidad diaria (d) y el tiempo que duró desarrollando la prueba (t), c = d/t
   Por ejemplo si tengo menos experiencia y por mi curva de aprendizaje me demoro 4 horas en hacer esta prueba pero tengo una disponibilidad de 8 horas diarias,
   mi capacidad es de 8/4 = 2, por lo que ni curva de aprendizaje es compensada por mi disponibilidad. Por otra parte puede haber alguien muy experimentado que tarda 2 horas pero con baja baja disponibilidad diaria de 2 horas, entonces la capacidad es 2/2 = 1, menor de quien tiene menos experiencia.
