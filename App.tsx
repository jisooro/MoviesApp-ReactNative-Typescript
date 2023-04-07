import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GradientProvider } from './src/context/GradientContext';
import StackNavigation from './src/navigation/StackNavigation';

const AppState = ({ children }: any) => {
	return (
		<GradientProvider>
			{ children }
		</GradientProvider>
	)
}

const App = () => {
	return (
		<NavigationContainer>
			<AppState>
				<StackNavigation />
			</AppState>
		</NavigationContainer>
	);
};

export default App;
