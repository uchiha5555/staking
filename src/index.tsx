import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './style/globalStyle';
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
	<React.StrictMode>
		<HelmetProvider>
			<Helmet>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
				<link href="https://fonts.cdnfonts.com/css/tahoma" rel="stylesheet" />
			</Helmet>
			<GlobalStyle />
			<App />
		</HelmetProvider>
	</React.StrictMode>,
)
