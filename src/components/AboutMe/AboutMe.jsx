import './AboutMe.css'

import Headshot from '../../assets/img/beach.jpg'

export default function AboutMe() {
    return (
        <>
            <section>
                <div className='aboutMe-container max-w'>
                    <h1 className='title-text about-title'>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eius inventore tenetur architecto est, natus assumenda eligendi, totam, adipisci quis commodi. Culpa cupiditate dolorem, minima officia quae, voluptas necessitatibus dolores enim dolore veritatis nobis distinctio labore expedita accusantium tempora at nemo? Dolorum culpa ratione dignissimos quaerat dicta, eos ab! Ex quis perferendis asperiores amet soluta dicta voluptatem! Ex consequuntur veniam sequi sunt error, obcaecati ad alias delectus officia. Quasi impedit natus eius inventore, quas explicabo sit illum consequuntur? Autem nemo fugiat nihil maiores iusto debitis sint, atque nulla at commodi, voluptates quia hic eligendi eius quaerat itaque molestiae porro modi?</p>
                    <div className='headshot-container'>
                        <img src={Headshot} className='headshot-img'></img>
                    </div>
                </div>
            </section>
        </>
    )
}