import styles from './HomeSection.module.css'
import Image from 'next/image'

function HomeSection(props) {
    return (
        <div className={styles.section} style={props.style1}>
            <div className={styles.sectionHeader}>
            <h2>{props.header}</h2>
            </div>

            <div className={styles.cardsContainer} style={props.style2}>
            <div className={styles.narrowProduct}>
                <div className={styles.narrowImg} >
                <Image
                    alt="oppo"
                    src={props.src1}
                    layout="fill"
                    objectFit="contain" 
                />
                </div>
                <h2>{props.p1}<span className={styles.new}>NEW</span></h2>
                <p>{props.p2}</p>
                <p>{props.p3}</p>

                <div className={styles.learnMore}>
                <a>Learn more</a>
                </div>
            </div>
            
            <div className={styles.wideProduct}>
                <div className={styles.wideImg} >
                <Image
                    alt="oppo"
                    src={props.src2}
                    layout="fill"
                    objectFit="contain" 
                />
                </div>
                <h2>{props.p4}<span className={styles.new}>NEW</span></h2>
                <p>{props.p5}</p>
                <p>{props.p6}</p>

                <div className={styles.learnMore}>
                <a>Learn more</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeSection
