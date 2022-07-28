import { useRecoilValue } from 'recoil';
import { noOfClicksSelector } from './noOfCkicksSelector';

function DisplaySharedCount() {
    const count = useRecoilValue(noOfClicksSelector);

    return (
        <h1>Count: {count}</h1>
    )
}

export default DisplaySharedCount