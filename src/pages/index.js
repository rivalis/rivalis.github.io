import React, { Component } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const WaveDecoration = () => (
    <div className="hero-decoration">
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
                                    <h1>Rivalis framework</h1>
                                    <h3>Open source framework for building protocol agnostic, scalable, consistent realtime event servers.</h3>
                                    <Link className={clsx('button button--outline button--primary button--lg', styles.button)} to={'docs/'}>Get Started</Link>
                                </div>
                            </div>
                            <div className={clsx('col col--6')}>
                                <img className="" src="img/gfx-rivalis.png" alt="gfx rivalis" />
                            </div>
                        </div>
                    </div>
                    <WaveDecoration />
                </header>
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
