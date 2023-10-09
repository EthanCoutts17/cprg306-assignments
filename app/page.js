import Link from "next/link";
import MyComp from './StudentInfo'

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development - Assignments</h1>
      <MyComp/>

      <li>
      <Link href = "Week2">Week 2 </Link>
      </li>
      <li>
      <Link href = "Week3">Week 3 </Link>
      </li>
      <li>
      <Link href = "week4">week4 </Link> 
      </li>

    </main>
  )
}
