import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import barcode from '../../public/himg-kkcnote.jpg'

const HomeFeatures = ({ feature }) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2>History</h2>
        </div>
        <div className='flex flex-col lg:flex-row justify-start items-start px-1 lg:px-8 lg:container lg:mx-auto py-6  '>
        <div className='py-4 px-4  rounded-2xl p-2 w-full lg:w-1/2 space-y-4'>
        <div>
      
                      </div>            <p className=''>In India the Co-Operative Act was first created in 1904 and then passed again in the year 1912 as the Cooperative Act which led to the formation of the Central Co-Operative Banks and the States initiated the formation of various Co-Operative Banks. In year 1915 the first District Co-Operative Bank was founded in Gola Gokarnnath, but this institution failed due to some reasons. On 05/09/1916 our district’s great personality Honourable LateIn India the Co-Operative Act was first created in 1904 and then passed again in the year 1912 as the Cooperative Act which led to the formation of the Central Co-Operative Banks and the States initiated the formation of various Co-Operative Banks. In year 1915 the first District Co-Operative Bank was founded in Gola Gokarnnath, but this institution failed due to some reasons. On 05/09/1916 our district’s great personality Honourable Late ... <Link href={"/about/history"} className='text-primary'>Read More</Link></p>
        </div>
        <div className='rounded-md w-full lg:w-1/2 flex justify-center items-center    p-4'>
        <div className="flex flex-col items-center justify-center">
        <div className='bg-white border border-primary p-2 w-full h-full rounded-md flex justify-between flex-col'>
            <Image className='h-72 w-50' src={barcode} alt='hello'/>
            <p className='text-center text-sm'>VARANASI DISTRICT CO-OPERATIVE BANK</p>

            </div>
            </div>
           
        </div>
    </div>
   
      </div>
    </section>
  );
};

export default HomeFeatures;
