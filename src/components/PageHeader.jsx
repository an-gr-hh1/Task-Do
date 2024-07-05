import list from '../assets/list.png'
export default function PageHeader() {
  return (
    <>
      <div className='fixed top-0 left-0 w-full flex flex-row gap-2 items-center pt-2 pl-2'>
        <img src={list} alt="Title Logo" className='w-12 h-12'/>
        <h1 className='text-3xl font-semibold'>TaskDo</h1>
      </div>
    </>
  )
}
