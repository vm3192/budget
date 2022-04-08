import React from 'react';
import { createRoot } from 'react-dom/client';

const App = function() {
	return (
		<h1>І знову привіт</h1>
	)
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
