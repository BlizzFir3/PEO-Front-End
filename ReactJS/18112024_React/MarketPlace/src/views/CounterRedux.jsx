import { useDispatch, useSelector } from 'react-redux';
import Titre from '../components/Titre';
import { decrement, increment } from '../features/counterSlice';

export default function CounterRedux() {
    const count =useSelector((state) => state.counter.value)

    const dispatch = useDispatch();

    return (
        <>
            <section className="w-full">
                <Titre>Mon compteur Redux</Titre>
                <p>{count}</p>
                <section>
                    <button className='p-4 m-2 btn btn-primary btn-outline' onClick={() => dispatch(increment())}>+</button>
                    <button className='p-4 m-2 btn btn-secondary btn-outline' onClick={() => dispatch(decrement())}>-</button>
                </section>
            </section>
        </>
    );
}
