import Image from 'next/image'
import bgImage from '../assets/image.jpeg'
import styles from '../styles/Home.module.css'

export default function Home() {
	const data = [
		{ id: 1, sold: false },
		{ id: 2, sold: true },
		{ id: 3, sold: false },
		{ id: 4, sold: false },
		{ id: 5, sold: true },
		{ id: 6, sold: true },
		{ id: 7, sold: false },
		{ id: 8, sold: true },
		{ id: 9, sold: false },
	]

	return (
		<div className={styles.wrapper}>
			<div className={styles.gridContainer}>
				<div>
					<Image
						src={bgImage}
						alt='trees'
						layout='responsive'
						width={1080}
						height={1080}
						quality={100}
						priority
						placeholder='blur'
					/>
				</div>

				<div className={styles.linksContainer}>
					{data.map((item) => (
						<a
							href='https://example.com'
							className={`${styles.link} ${item.sold ? styles.sold : ''}`}
							target='_blank'
							rel='noreferrer'
							key={item.id}
						>
							<span>sold</span>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
