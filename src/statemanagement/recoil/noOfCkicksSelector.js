import { selector } from 'recoil';
import { counterState } from './counterState';

export const noOfClicksSelector = selector(
    {
        key: 'noOfClicksSelector',
        get: ({get})=>{
            const clicksData = get(counterState);
            const clicksCount = clicksData.reduce((sum,click)=>{
                return sum + click.amount
            }, 0)
            console.log(clicksCount)
            return clicksCount
        }
    }
)