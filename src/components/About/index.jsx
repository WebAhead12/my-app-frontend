import style from "./style.module.css"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"

function About(props) {
  const goTo = useNavigate()

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          goTo("/")
        }}
      >
        Go back to home page
      </Button>

      <h1 className={style.title}>About page</h1>
    </div>
  )
}

export default About
