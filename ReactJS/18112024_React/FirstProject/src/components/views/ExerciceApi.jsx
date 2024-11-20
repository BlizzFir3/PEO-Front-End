import ArrayData from '../ArrayData';
import ConsigneApi from '../ConsigneApi';

export default function ExerciceApi() {
    return (
        <>
            <h1 className="pt-20">Exercice API</h1>
            <ConsigneApi />
            <h2 className='m-4'>Tableau des porduits</h2>
			<ArrayData />
        </>
    );
}
