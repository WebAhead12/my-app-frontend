import style from "./style.module.css"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"

function Home(props) {
  const goTo = useNavigate()

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          goTo("about")
        }}
      >
        About page
      </Button>

      <h1 className={style.title}>Home page</h1>
    </div>
  )
}

export default Home
