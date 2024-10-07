import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";
const App =() => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#3D3251",
					paddingTop: 177,
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 16,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 10,
							height: 10,
							marginRight: 8,
						}}
					/>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 17,
						}}>
						{"Close"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Text 
						style={{
							color: "#F43F3E",
							fontSize: 17,
							marginRight: 18,
						}}>
						{" 3 of 20"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 18,
							marginRight: 16,
						}}
					/>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 18,
							height: 20,
						}}
					/>
				</View>
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						height: 400,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingVertical: 174,
						paddingHorizontal: 9,
					}}
					>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 30,
							height: 50,
						}}
					/>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 30,
							height: 50,
						}}
					/>
				</ImageBackground>
			</ScrollView>
		</SafeAreaView>
	)
}
export default App;