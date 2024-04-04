import { Router } from "express"

import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { firestore } from "./services/firebase"

const routes = Router()

routes.get("/", (req, res) => {
  return res.status(200).json("Hello world")
})

export { routes }
