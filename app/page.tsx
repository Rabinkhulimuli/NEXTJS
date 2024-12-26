import Hello from "./components/hello"
export default function Home() {
  console.log("This is server side ")
  return (<>
  <h1>Hello World</h1>
  <Hello/>
  </>)
   
}
