import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
const App = () => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#0087D580",
						paddingVertical: 25,
						paddingHorizontal: 21,
						marginBottom: 28,
						shadowColor: "#0000001A",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 8
						},
						shadowRadius: 16,
						elevation: 16,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 20,
							height: 20,
							marginRight: 83,
						}}
					/>
					<Text 
						style={{
							fontSize: 20,
							flex: 1,
						}}>
						{"ILearn.Place"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#3D3251",
						fontSize: 36,
						marginBottom: 18,
						marginLeft: 17,
					}}>
					{"Game Categories"}
				</Text>
				<View 
					style={{
						height: 91,
						marginBottom: 16,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							height: 90,
							backgroundColor: "#F0FFC3",
							borderRadius: 10,
						}}>
					</View>
					<Text 
						style={{
							color: "#000000",
							marginTop: -70,
							marginHorizontal: 24,
						}}>
						{"Takshak\nBattle Field"}
					</Text>
				</View>
				<View 
					style={{
						height: 91,
						marginBottom: 16,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							height: 90,
							backgroundColor: "#4B94D4",
							borderRadius: 10,
						}}>
					</View>
					<Text 
						style={{
							color: "#000000",
							marginTop: -70,
							marginHorizontal: 24,
						}}>
						{"Totoka\nSmart City"}
					</Text>
				</View>
				<View 
					style={{
						height: 91,
						marginBottom: 16,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							height: 90,
							backgroundColor: "#FF725E",
							borderRadius: 10,
						}}>
					</View>
					<Text 
						style={{
							color: "#000000",
							marginTop: -70,
							marginHorizontal: 24,
						}}>
						{"Eden\nAdvanced Smart City"}
					</Text>
				</View>
				<View 
					style={{
						height: 91,
						marginBottom: 154,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							height: 90,
							backgroundColor: "#FFE99E",
							borderRadius: 10,
						}}>
					</View>
					<Text 
						style={{
							color: "#000000",
							marginTop: -70,
							marginHorizontal: 24,
						}}>
						{"Tokada\nAdvanced Battle Field"}
					</Text>
				</View>
				<View 
					style={{
						backgroundColor: "#0087D580",
						paddingBottom: 12,
					}}>
					<View 
						style={{
							height: 1,
							backgroundColor: "#E0E0E0",
							marginBottom: 14,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 9,
							marginHorizontal: 35,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 19,
								height: 20,
							}}
						/>
						<View 
							style={{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 22,
								height: 21,
								marginRight: 67,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 21,
								height: 22,
								marginRight: 72,
							}}
						/>
						<View 
							style={{
								width: 7,
								marginRight: 5,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 5,
									marginBottom: 2,
								}}
							/>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 8,
								}}
							/>
						</View>
						<View 
							style={{
								width: 7,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 5,
									marginBottom: 2,
								}}
							/>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 8,
								}}
							/>
						</View>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								bottom: 0,
								right: 5,
								width: 10,
								height: 7,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								top: 7,
								right: 7,
								width: 6,
								height: 6,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginHorizontal: 32,
						}}>
						<Text 
							style={{
								color: "#D9DAE8",
								fontSize: 10,
							}}>
							{"Home"}
						</Text>
						<Text 
							style={{
								color: "#3D3251",
								fontSize: 10,
							}}>
							{"Games"}
						</Text>
						<Text 
							style={{
								color: "#D9DAE8",
								fontSize: 10,
							}}>
							{"ISPL"}
						</Text>
						<Text 
							style={{
								color: "#D9DAE8",
								fontSize: 10,
							}}>
							{"Club"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						backgroundColor: "#0087D580",
						paddingHorizontal: 113,
					}}>
					<View 
						style={{
							height: 5,
							backgroundColor: "#3D3251",
							borderRadius: 100,
							marginTop: 9,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
export default App;