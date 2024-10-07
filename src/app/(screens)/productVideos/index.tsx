import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, } from "react-native";
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
						height: 109,
						marginBottom: 20,
					}}>
					<View 
						style={{
							backgroundColor: "#0087D580",
							paddingTop: 27,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 8
							},
							shadowRadius: 16,
							elevation: 16,
						}}>
						<View 
							style={{
								marginBottom: 34,
								marginHorizontal: 19,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 8,
									height: 15,
								}}
							/>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 1,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 4,
								marginHorizontal: 24,
							}}>
							<Text 
								style={{
									color: "#3D3251",
									fontSize: 12,
								}}>
								{"Home"}
							</Text>
							<Text 
								style={{
									color: "#D9DAE8",
									fontSize: 12,
								}}>
								{"Tasks"}
							</Text>
							<Text 
								style={{
									color: "#D9DAE8",
									fontSize: 12,
								}}>
								{"FAQ"}
							</Text>
							<Text 
								style={{
									color: "#D9DAE8",
									fontSize: 12,
								}}>
								{"Reviews"}
							</Text>
						</View>
						<View 
							style={{
								width: 40,
								height: 2,
								backgroundColor: "#3D3251",
								marginBottom: 4,
								marginHorizontal: 21,
							}}>
						</View>
						<View 
							style={{
								height: 2,
								backgroundColor: "#E0E0E0",
							}}>
						</View>
					</View>
					<Text 
						style={{
							color: "#000000",
							marginTop: -83,
							marginHorizontal: 56,
						}}>
						{"Battle Field\nLevel: Military Jeep"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#3D3251",
						fontSize: 17,
						marginBottom: 16,
					}}>
					{"Videos"}
				</Text>
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						width: 200,
						height: 110,
						paddingHorizontal: 12,
						marginBottom: 19,
					}}
					>
					<View 
						style={{
							width: 37,
							height: 16,
							marginTop: 84,
						}}>
						<View 
							style={{
								height: 16,
								backgroundColor: "#000000B0",
							}}>
						</View>
						<Text 
							style={{
								position: "absolute",
								bottom: -2,
								right: 1,
								color: "#FFFFFF",
								fontSize: 14,
							}}>
							{"01:56"}
						</Text>
					</View>
				</ImageBackground>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 16,
					}}>
					{"Task Description-01"}
				</Text>
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						width: 200,
						height: 106,
						paddingHorizontal: 9,
						marginBottom: 19,
					}}
					>
					<View 
						style={{
							width: 42,
							height: 17,
							marginTop: 86,
						}}>
						<View 
							style={{
								height: 17,
								backgroundColor: "#000000B0",
							}}>
						</View>
						<Text 
							style={{
								position: "absolute",
								bottom: -1,
								left: 4,
								color: "#FFFFFF",
								fontSize: 14,
							}}>
							{"08:18"}
						</Text>
					</View>
				</ImageBackground>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 16,
					}}>
					{"Unboxing"}
				</Text>
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						width: 200,
						height: 110,
						paddingHorizontal: 12,
						marginBottom: 19,
					}}
					>
					<View 
						style={{
							width: 37,
							height: 16,
							marginTop: 85,
						}}>
						<View 
							style={{
								height: 16,
								backgroundColor: "#000000B0",
							}}>
						</View>
						<Text 
							style={{
								position: "absolute",
								bottom: -1,
								right: 1,
								color: "#FFFFFF",
								fontSize: 14,
							}}>
							{"01:56"}
						</Text>
					</View>
				</ImageBackground>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 16,
					}}>
					{"STEM Concept-01"}
				</Text>
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						width: 200,
						height: 115,
						paddingHorizontal: 10,
						marginBottom: 19,
					}}
					>
					<View 
						style={{
							width: 42,
							height: 17,
							marginTop: 88,
						}}>
						<View 
							style={{
								height: 17,
								backgroundColor: "#000000B0",
							}}>
						</View>
						<Text 
							style={{
								position: "absolute",
								bottom: -1,
								left: 4,
								color: "#FFFFFF",
								fontSize: 14,
							}}>
							{"08:18"}
						</Text>
					</View>
				</ImageBackground>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 16,
					}}>
					{"STEM Concept-02"}
				</Text>
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						width: 200,
						height: 115,
						paddingHorizontal: 10,
						marginBottom: 19,
					}}
					>
					<View 
						style={{
							width: 42,
							height: 17,
							marginTop: 88,
						}}>
						<View 
							style={{
								height: 17,
								backgroundColor: "#000000B0",
							}}>
						</View>
						<Text 
							style={{
								position: "absolute",
								bottom: -1,
								left: 4,
								color: "#FFFFFF",
								fontSize: 14,
							}}>
							{"08:18"}
						</Text>
					</View>
				</ImageBackground>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 16,
					}}>
					{"STEM Concept-03"}
				</Text>
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						width: 200,
						height: 115,
						paddingHorizontal: 10,
						marginBottom: 19,
					}}
					>
					<View 
						style={{
							width: 42,
							height: 17,
							marginTop: 88,
						}}>
						<View 
							style={{
								height: 17,
								backgroundColor: "#000000B0",
							}}>
						</View>
						<Text 
							style={{
								position: "absolute",
								bottom: -1,
								left: 4,
								color: "#FFFFFF",
								fontSize: 14,
							}}>
							{"08:18"}
						</Text>
					</View>
				</ImageBackground>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 16,
					}}>
					{"STEM Concept-04"}
				</Text>
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