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
            className='mt-5 rounded-xl text-black p-1 bg-card' 
            value={filter} 
            onChange={(e) => {setFilter(e.target.value)}}
        >
            <option value="all">Todas transações</option>
            <option value="week">Última semana</option>
            <option value="month">Último mês</option>
            <option value="custom">Outro período</option>
        </select>
    )
}

export default DateFilter;