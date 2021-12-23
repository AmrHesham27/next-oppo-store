import styles from './ProductCard.module.css'
import Image from 'next/image'
function GameCard(props) {
    return (
        <div className={styles.GameCard}>
            <figure className={styles.Figure}>
                <Image layout='fill' src={props.img} alt='game'/>
            </figure>
        </div>
    )
}

export default GameCard
