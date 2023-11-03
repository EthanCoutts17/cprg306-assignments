import Link from "next/link";
import MyComp from './StudentInfo'

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development - Assignments</h1>
      <MyComp/>

      <li>
      <Link href = "week2">week 2 </Link>
      </li>
      <li>
      <Link href = "week3">week 3 </Link>
      </li>
      <li>
      <Link href = "week4">week 4 </Link> 
      </li>
      <li>
      <Link href = "week5">week 5 </Link> 
      </li>
      <li>
      <Link href = "week6">week 6 </Link> 
      </li>
      <li>
      <Link href = "week7">week 7 </Link> 
      </li>


    </main>
  )
}
