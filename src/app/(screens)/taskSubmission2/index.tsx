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
						height: 102,
						marginBottom: 65,
					}}>
					<View 
						style={{
							backgroundColor: "#0087D566",
							paddingTop: 27,
							paddingBottom: 4,
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
								alignItems: "center",
								marginBottom: 4,
								marginHorizontal: 23,
							}}>
							<Text 
								style={{
									color: "#3D3251",
									fontSize: 12,
									marginRight: 4,
									flex: 1,
								}}>
								{"Videos"}
							</Text>
							<Text 
								style={{
									color: "#D9DAE8",
									fontSize: 12,
									marginRight: 38,
								}}>
								{"Notes"}
							</Text>
							<Text 
								style={{
									color: "#D9DAE8",
									fontSize: 12,
									marginRight: 35,
								}}>
								{"Concepts"}
							</Text>
							<Text 
								style={{
									color: "#D9DAE8",
									fontSize: 12,
								}}>
								{"Submissions"}
							</Text>
						</View>
						<View 
							style={{
								width: 45,
								height: 2,
								backgroundColor: "#3D3251",
								marginHorizontal: 36,
							}}>
						</View>
					</View>
					<Text 
						style={{
							color: "#000000",
							marginTop: -81,
							marginHorizontal: 56,
						}}>
						{"Battle Field: Military Jeep\nTask: How to Contr..."}
					</Text>
				</View>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						paddingVertical: 20,
						paddingRight: 26,
						marginBottom: 65,
						marginHorizontal: 20,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 17,
							marginBottom: 18,
							marginLeft: 27,
						}}>
						{"Submit Assignments"}
					</Text>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#3D3251",
							borderWidth: 1,
							paddingVertical: 30,
							paddingHorizontal: 17,
							marginBottom: 16,
							marginLeft: 26,
						}}>
						<Text 
							style={{
								color: "#3787F4",
								fontSize: 17,
							}}>
							{"Media Title*"}
						</Text>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#3D3251",
							borderWidth: 1,
							paddingTop: 30,
							paddingBottom: 138,
							paddingHorizontal: 17,
							marginBottom: 16,
							marginLeft: 26,
						}}>
						<Text 
							style={{
								color: "#3787F4",
								fontSize: 17,
							}}>
							{"Media Description"}
						</Text>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#3D3251",
							borderWidth: 1,
							paddingVertical: 8,
							paddingHorizontal: 7,
							marginBottom: 24,
							marginLeft: 26,
						}}>
						<View 
							style={{
								width: 110,
								height: 21,
								alignItems: "center",
								backgroundColor: "#D9D9D9",
								borderColor: "#3D3251",
								borderWidth: 1,
								paddingVertical: 4,
								marginBottom: 7,
							}}>
							<Text 
								style={{
									color: "#3D3251",
									fontSize: 17,
								}}>
								{"Choose files"}
							</Text>
						</View>
						<Text 
							style={{
								color: "#20386E",
								fontSize: 12,
							}}>
							{"No files choosen"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginLeft: 120,
						}}>
						<View 
							style={{
								width: 81,
								alignItems: "center",
								backgroundColor: "#F5F9FF",
								borderColor: "#000000",
								borderRadius: 5,
								borderWidth: 1,
								paddingVertical: 10,
								marginRight: 12,
							}}>
							<Text 
								style={{
									color: "#3787F4",
									fontSize: 17,
								}}>
								{"CANCEL"}
							</Text>
						</View>
						<View 
							style={{
								width: 81,
								alignItems: "center",
								backgroundColor: "#F5F9FF",
								borderColor: "#000000",
								borderRadius: 5,
								borderWidth: 1,
								paddingVertical: 10,
							}}>
							<Text 
								style={{
									color: "#3787F4",
									fontSize: 17,
								}}>
								{"SUBMIT"}
							</Text>
						</View>
					</View>
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
							marginHorizontal: 33,
						}}>
						<Text 
							style={{
								color: "#9596B2",
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