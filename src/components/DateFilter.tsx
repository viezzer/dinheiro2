import {Dispatch, SetStateAction} from 'react'

interface DateFilterProps {
    filter:string;
    setFilter:Dispatch<SetStateAction<string>>;
  }

function DateFilter({ filter, setFilter }: DateFilterProps) {
    return (
        <select 
            id='periodFilter' 
            name="periodFilter" 
            className='mt-5 rounded-xl text-black p-1 bg-card text-sm' 
            value={filter} 
            onChange={(e) => {setFilter(e.target.value)}}
        >
            <option value="all">Todas transações</option>
            <option value="week">Últimos 7 dias</option>
            <option value="month">Últimos 30 dias</option>
        </select>
    )
}

export default DateFilter;