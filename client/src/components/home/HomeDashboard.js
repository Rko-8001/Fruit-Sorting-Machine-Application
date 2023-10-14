import React, { useEffect, useState} from 'react'
import Sidebar from '../sidePages/sideBar/SideBar'
import SortCategory from './optionInput/sort/SortCategory'
import Disclaimer from './optionInput/other/Disclaimer'
import { getOptionPhase } from '../tokens/Token'

export default function HomeDashboard() {
  const [pagePhase, setPagePhase] = useState(SortCategory);

  useEffect(() => {
    const phase = getOptionPhase();
      if (phase === "sortPage") {
          // sort category page
          setPagePhase(SortCategory);
      }
      else if(phase === "disclaimer") {
          // final step page
          setPagePhase(Disclaimer);
      }
      else {
          // machine on page
          setPagePhase(null);
      }
  },[])
  return (
    <>
      <div className='flex'>
        <Sidebar />
      </div>
    </>
  )
}
