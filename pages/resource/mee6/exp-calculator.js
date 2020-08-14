import Head from 'next/head'
import { Typography, Card, Textbox, Button, ButtonToolbar } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import styles from '../../../styles/Home.module.css'

function calc(level) {
	return (5 * Math.pow(level, 2) + 50 * level + 100)
}

String.prototype.isEmptyOrWhitespace = function () {
	if (
		this == "" ||
		this == " "
	) return true
	return false
}

export default function Calculator() {
	const [desiredLevel, setDesiredLevel] = React.useState(""),
		[currentEXP, setCurrentEXP] = React.useState(""),
		[EXPRate, setEXPRate] = React.useState(1),
		[EXPToNext, setEXPToNext] = React.useState(0),
		[EXPToLevel, setEXPToLevel] = React.useState(0),
		[isError, setIsError] = React.useState(false),
		[errorMessage, setErrorMessage] = React.useState(),
		[errorAnim, setErrorAnim] = React.useState(false),
		[showChangelog, setShowChangelog] = React.useState(false),
		[showExtra, setShowExtra] = React.useState(false)

	function ca(lvl, isCEXP) {
		if (isCEXP != undefined) {
			setCurrentEXP(lvl)
		} else {
			setDesiredLevel(lvl)
			if (lvl > 1768801) return
			const res = lvl - 1 > -1 ? calc(lvl - 1) : 0
			let tot = 0

			for (var i = 0; i < lvl; i++) tot += (5 * Math.pow(i, 2) + 50 * i + 100)

			setEXPToNext(Math.round(tot))
			setEXPToLevel(Math.round(res))
		}
	}

	function setError(m) {
		if (isError == true) return;
		setErrorMessage(m)
		setIsError(true)
		setErrorAnim(true)
		setTimeout(() => { setErrorAnim(false) }, 250)
	}

	function noError() {
		if (isError == false) return;
		setIsError(false)
	}

	const EqualSizeGridProps = {
		xs: 12,
		sm: 4,
		md: 4,
		style: {
			textAlign: "center"
		}
	}

	const HeadProps = {
		style: {
			marginBottom: 4
		}
	}

	let lvl = desiredLevel.length == 0 ? 0 : desiredLevel
	let tot = EXPToLevel.length == 0 ? 0 : EXPToLevel
	let totnext = EXPToNext ?? 0
	let curr = parseInt(currentEXP.length == 0 ? 0 : currentEXP) ?? 0
	if (typeof curr == "NaN") curr = 0

	console.log(typeof tot)
	console.log(typeof curr)

	let perc = (curr / (tot == 0 ? 1 : tot)) * 100
	let left = tot - curr
	let min = Math.round(left / 25)
	let max = Math.round(left / 15)

	if (
		perc <= 100 &&
		curr >= 0 &&
		left >= 0 &&
		lvl >= 0 &&
		desiredLevel <= 1768801 &&
		currentEXP <= 9223356379307802000
	) {
		if (isError == true) noError()
	} else {
		console.log("[DEBUG] PCL:", perc, curr, left)
		console.log("[DEBUG] total:", tot)
		lvl = 0
		perc = 100
		left = 0
		min = 0
		max = 0
		tot = 0
		totnext = 0
		curr = 0
		if (isError == false && desiredLevel > 1768801) setError("That level isn't possible with MEE6!")
		else if (isError == false && currentEXP > 9223356379307802000) setError("That amount of EXP isn't possible with MEE6!")
		else if (isError == false) setError()
	}

	return (
		<div className={`${styles.container} ${errorAnim && styles.err}`} id="calc">
			<Typography type="h2" {...HeadProps}>
				EXP Calculator
			</Typography>

			<Card style={{ borderRadius: 8, marginBottom: 32 }}>
				<Grid fluid>
					<Row>
						<Col {...EqualSizeGridProps}>
							<Typography type="h5" {...HeadProps}>
								{totnext}
							</Typography>
							<Typography type="sh1" style={{ fontFamily: "'Roboto', sans-serif" }}>
								xp from level {(+lvl - 1) > -1 ? +lvl - 1 : "unleveled"} to {lvl ?? 0}
							</Typography>
						</Col>
						<Col {...EqualSizeGridProps}>
							<Typography type="h5" {...HeadProps}>
								{tot - curr == tot ? tot : `${tot - curr} / ${tot}`}
							</Typography>
							<Typography type="sh1" style={{ fontFamily: "'Roboto', sans-serif" }}>
								{tot - curr != tot && `left /`} xp to level {lvl}
							</Typography>
						</Col>
						<Col {...EqualSizeGridProps}>
							<Typography type="h5" {...HeadProps}>
								{min == max && `${max}`}
								{min != max && `${min} - ${max}`}
							</Typography>
							<Typography type="sh1" style={{ fontFamily: "'Roboto', sans-serif" }}>
								messages required
							</Typography>
						</Col>
					</Row>
				</Grid>
				<div className={`${styles.prog} ${isError && styles["error"]} ${perc == 100 ? styles.success : ''}`} style={{ "--per": `${perc}%` }} />
			</Card>

			<Card style={{ borderRadius: 8, marginBottom: 32 }}>
				<div style={{ textAlign: "center" }}>
					<Typography type="body">
						Fill out the fields below. Calculating is done automatically.
					</Typography>

					<Textbox type="number" label="Desired Level" value={desiredLevel} onChange={(e) => { ca(e.currentTarget.value) }} />
					<Textbox type="number" label="Current EXP" value={currentEXP} onChange={(e) => { ca(e.currentTarget.value, true) }} />

					<ButtonToolbar>
						<Button look="ghost" color="gray" pill onClick={() => setShowExtra(true)}>
							Extra Info
						</Button>
						<Button look="ghost" color="gray" pill onClick={() => setShowChangelog(true)}>
							Changelog
						</Button>
					</ButtonToolbar>
				</div>
			</Card>

			<div style={{ display: isError ? "block" : "none" }} className={`${styles["bottom-bar"]} ${errorAnim && styles["error"]}`}>
				<Typography type="h6">
					Invalid Input
				</Typography>
				<Typography type="body2">
					{errorMessage ?? "The output will be incorrect if you don't fix these errors."}
				</Typography>
			</div>

			<div style={{ textAlign: "center" }}>
				<Typography type="caption">
					This website is not affiliated with mee6.xyz.
				</Typography>
			</div>

			<div className={`${styles.hidden} ${showExtra && styles.show}`}>
				{showExtra && (
					<>
						<Typography type="h5">
							Extra Info
						</Typography>

						<Card title="Helpful Links" style={{ borderRadius: 8, marginBottom: 32 }}>
							<Typography>
								These links provide resources that may help you.
							</Typography>
							<ButtonToolbar>
								<Button pill>
									MEE6 Support
								</Button>
								<Button look="ghost" color="gray" pill onClick={() => { }}>
									Old Version
								</Button>
								<Button look="ghost" color="gray" pill onClick={() => { }}>
									EXP Table
								</Button>
							</ButtonToolbar>
						</Card>

						<Card title="Calculations" style={{ borderRadius: 8, marginBottom: 32 }}>
							<Typography>
								The formula for calculation
								is <code>5 * (lvl ^ 2) + 50 * lvl + 100</code> where <code>lvl</code> is
								your current level.
							</Typography>
						</Card>

						<Card title="Statistics" style={{ borderRadius: 8, marginBottom: 32 }}>
							<Typography>
								The maximum level is 1,768,801, which is the equal to 9,223,356,379,307,802,000 experience. <br />
								The goal was to make it impossible to acheive in a lifetime.
							</Typography>
						</Card>
					</>
				)}
			</div>

			<div className={`${styles.hidden} ${showChangelog && styles.show}`}>
				{showChangelog && (
					<>
						<Typography type="h5">
							Changelog
						</Typography>

						<Card title="Release" style={{ borderRadius: 8, marginBottom: 32 }}>
							<Typography>
								This new calculator released numorous bug fixes as well as: <br />
								- Decimal support for levels <br />
								- Updated, clean UI <br />
								- Custom error messages so you know what to fix <br />
								- Easier to type into the boxes without your input being ruined
							</Typography>
						</Card>
					</>
				)}
			</div>
		</div>
	)
}
