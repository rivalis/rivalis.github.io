import React, { Component } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
import { a11yLight, androidstudio, CodeBlock, github, googlecode, vs2015 } from 'react-code-blocks'

const WaveDecoration = () => (
    <div className="hero_decoration">
        <div className="decoration wave-animation">
            <div className="wave wave-top">
                <div className="wave-bg wave-bg-top"></div>
            </div>
            <div className="wave wave-middle">
                <div className="wave-bg wave-bg-middle"></div>
            </div>
            <div className="wave wave-bottom">
                <div className="wave-bg wave-bg-bottom"></div>
            </div>
        </div>
    </div>
)

class Welcome extends Component {
    
    render() {

        return (
            <Layout title="Welcome" description="Distributed multiplayer game server framework" >
                <header className={clsx(styles.hero)}>
                    <div className="container">
                        <div className="row">
                            <div className={clsx('col col--6')}>
                                <div className={styles.intro}>
                                    <h1>Rivalis</h1>
                                    <h3>Open source framework for building protocol agnostic and scalable multiplayer servers</h3>
                                    <Link className={clsx('button button--outline button--primary button--lg', styles.button)} to={'docs/'}>Get Started</Link>
                                </div>
                            </div>
                            <div className={clsx('col col--6')}>
                                <img className="" src="img/gfx-rivalis.png" alt="gfx rivalis" />
                                <WaveDecoration />
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="wrap-white">
                        <div className="container">
                            <div className="row">
                                <div className={clsx('col col--12')}>
                                    <h3>Why Rivalis?</h3>
                                    <p className={clsx(styles.highlight)}>The powerful API structure and extensibility of this framework will fit perfectly in every type of game. Rivalis is designed to support and solve most common problems when it comes to development of multiplayer game servers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-after-white">
                        <div className="container">
                            <div className="row">
                                <div className={clsx('col col--12')}>
                                    <h3 className={clsx(styles.after_highlight)}>Features</h3>
                                </div>

                                <div className={clsx('col col--3')}>
                                    <div className={clsx(styles.block)}>
                                        <h3>Scalable</h3>
                                        <p>Integration with most popular storage and messaging servers</p>
                                    </div>
                                </div>

                                <div className={clsx('col col--3')}>
                                    <div className={clsx(styles.block)}>
                                        <h3>Extensible</h3>
                                        <p>Wide range of supported protocols and game engines</p>
                                    </div>
                                </div>

                                <div className={clsx('col col--3')}>
                                    <div className={clsx(styles.block)}>
                                        <h3>Powerful API</h3>
                                        <p>Rivalis API is designed to handle common multiplayer problems</p>
                                    </div>
                                </div>

                                <div className={clsx('col col--3')}>
                                    <div className={clsx(styles.block)}>
                                        <h3>Open Source</h3>
                                        <p>Free to use, under the most permissive <a target="_blank" href="https://github.com/rivalis/rivalis-core/blob/main/LICENSE">MIT License</a></p>
                                    </div>
                                </div>

                                <div className={clsx('col col--12')}>
                                    <h3 className={clsx(styles.heading)}>Support for</h3>
                                </div>
                                <div className={clsx('col col--2')}>
                                    <div className={clsx(styles.block_client)}>
                                        <img src="/img/clients/phaser.png"></img>
                                        <h4>Phaser</h4>
                                    </div>
                                </div>
                                <div className={clsx('col col--2')}>
                                    <div className={clsx(styles.block_client)}>
                                        <img src="/img/clients/unity3d.png"></img>
                                        <h4>Unity3D</h4>
                                    </div>
                                </div>
                                <div className={clsx('col col--2')}>
                                    <div className={clsx(styles.block_client)}>
                                        <img src="/img/clients/monogame.png"></img>
                                        <h4>MonoGame</h4>
                                    </div>
                                </div>
                                <div className={clsx('col col--2')}>
                                    <div className={clsx(styles.block_client)}>
                                        <img src="/img/clients/godot.png"></img>
                                        <h4>Godot</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        )
    }
}

export default Welcome

// function Home() {
//   const context = useDocusaurusContext();
//   const {siteConfig = {}} = context;
//   return (
//     <Layout
//       title={'Welcome'}
//       description="Description will go into a meta tag in <head />">
//       <header className={clsx('hero hero--primary', styles.heroBanner)}>
//         <div className="container">
//           <h1 className="hero__title">{siteConfig.title}</h1>
//           <p className="hero__subtitle">{siteConfig.tagline}</p>
//           <div className={styles.buttons}>
//             <Link
//               className={clsx(
//                 'button button--outline button--secondary button--lg',
//                 styles.getStarted,
//               )}
//               to={useBaseUrl('docs/')}>
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </header>
//       <main>
//         {features && features.length > 0 && (
//           <section className={styles.features}>
//             <div className="container">
//               <div className="row">
//                 {features.map((props, idx) => (
//                   <div></div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}
//       </main>
//     </Layout>
//   );
// }

// export default Home;
