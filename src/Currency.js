// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function Currency() {
	const [amount, setAmount] = useState(1);
	const [selectFirst, setSelectFirst] = useState("USD");
	const [selectSecond, setSelectSecond] = useState("INR");
	const [output, setOutput] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		function () {
			async function fetchCurrConv() {
				setIsLoading(true);
				const res = await fetch(
					`https://api.frankfurter.app/latest?amount=${amount}&from=${selectFirst}&to=${selectSecond}`
				);
				const data = await res.json();
				setOutput(data.rates[selectSecond]);
				setIsLoading(false);
			}
			if (selectFirst === selectSecond) return setOutput(amount);
			fetchCurrConv();
		},
		[amount, selectFirst, selectSecond]
	);

	return (
		<div>
			<input
				type="text"
				value={amount}
				onChange={(e) => setAmount(Number(e.target.value))}
			/>
			<select
				onChange={(e) => setSelectFirst(e.target.value)}
				disabled={isLoading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<select
				onChange={(e) => setSelectSecond(e.target.value)}
				disabled={isLoading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<p>
				{output} {selectSecond}
			</p>
		</div>
	);
}
