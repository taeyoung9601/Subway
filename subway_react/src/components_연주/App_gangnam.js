import {Background, Beauty, Food, Night, Traffic} from './components_gangnam/index';
import styles from './App_gangnam.module.css';

function App_gangnam() {

    return (
        <div className={styles.appGangnam}>
            <Background/>
            <Traffic/>
            <Food/>
            <Beauty/>
            <Night/>
        </div>
    );
}

export default App_gangnam;