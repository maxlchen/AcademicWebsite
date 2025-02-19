import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider, useTheme} from 'next-themes';

import Container from '../components/Container';
import personalInfo from '../components/data/personalInfo.json'

import 'tailwindcss/tailwind.css';

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	const {resolvedTheme} = useTheme();

	return (
		<ThemeProvider attribute="class">
			<Head>
				<title>{personalInfo.title}</title>
			</Head>
			<Container>
				<main className="flex flex-col m-auto leading max-w-4xl items-start p-5">
					<Component {...pageProps}/>
				</main>
			</Container>
		</ThemeProvider>
	);
};

export default App;
