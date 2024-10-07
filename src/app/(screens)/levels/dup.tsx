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
						marginBottom: 41,
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
						color: "#000000",
						fontSize: 17,
						marginBottom: 14,
						marginHorizontal: 21,
						width: 318,
					}}>
					{"Introducing ' Battle Field ' – A Revolutionary STEM Gaming Experience"}
				</Text>
				<View 
					style={{
						height: 245,
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 16,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							width: 156,
							flexDirection: "row",
						}}>
						<View 
							style={{
								flex: 1,
							}}>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									paddingVertical: 9,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 4,
									elevation: 4,
								}}>
								<Text 
									style={{
										color: "#3787F4",
										fontSize: 17,
										marginBottom: 4,
										marginLeft: 41,
									}}>
									{"Robo Car"}
								</Text>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										height: 121,
										marginBottom: 62,
									}}
								/>
								<View 
									style={{
										width: 62,
										height: 20,
										alignItems: "center",
										backgroundColor: "#D9D9D9",
										borderRadius: 3,
										paddingVertical: 5,
										marginHorizontal: 6,
									}}>
									<Text 
										style={{
											color: "#3D3251",
											fontSize: 10,
										}}>
										{"BUY NOW"}
									</Text>
								</View>
							</View>
							<Text 
								style={{
									marginTop: -86,
									marginHorizontal: 9,
								}}>
								{"Level : 1\nPrice : 2167 INR\nSave 25.0% with this discount offer!"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							width: 156,
							flexDirection: "row",
						}}>
						<View 
							style={{
								flex: 1,
							}}>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									paddingVertical: 9,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 4,
									elevation: 4,
								}}>
								<Text 
									style={{
										color: "#3787F4",
										fontSize: 17,
										marginBottom: 4,
										marginLeft: 28,
									}}>
									{"Military Jeep"}
								</Text>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										height: 121,
										marginBottom: 62,
									}}
								/>
								<View 
									style={{
										width: 62,
										height: 20,
										alignItems: "center",
										backgroundColor: "#D9D9D9",
										borderRadius: 3,
										paddingVertical: 5,
										marginHorizontal: 6,
									}}>
									<Text 
										style={{
											color: "#3D3251",
											fontSize: 10,
										}}>
										{"BUY NOW"}
									</Text>
								</View>
							</View>
							<Text 
								style={{
									marginTop: -86,
									marginHorizontal: 9,
								}}>
								{"Level : 2\nPrice : 2511 INR\nSave 14.0% with this discount offer!"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						height: 245,
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 37,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							width: 156,
							flexDirection: "row",
						}}>
						<View 
							style={{
								flex: 1,
							}}>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									paddingVertical: 9,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 4,
									elevation: 4,
								}}>
								<Text 
									style={{
										color: "#3787F4",
										fontSize: 17,
										marginBottom: 4,
										marginLeft: 38,
									}}>
									{"Follow Me"}
								</Text>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										height: 121,
										marginBottom: 62,
									}}
								/>
								<View 
									style={{
										width: 62,
										height: 20,
										alignItems: "center",
										backgroundColor: "#D9D9D9",
										borderRadius: 3,
										paddingVertical: 5,
										marginHorizontal: 6,
									}}>
									<Text 
										style={{
											color: "#3D3251",
											fontSize: 10,
										}}>
										{"BUY NOW"}
									</Text>
								</View>
							</View>
							<Text 
								style={{
									marginTop: -86,
									marginHorizontal: 9,
								}}>
								{"Level : 1\nPrice : 2719 INR\nSave 15.0% with this discount offer!"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							width: 156,
							flexDirection: "row",
						}}>
						<View 
							style={{
								flex: 1,
							}}>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									paddingVertical: 9,
									shadowColor: "#00000040",
									shadowOpacity: 0.3,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 4,
									elevation: 4,
								}}>
								<Text 
									style={{
										color: "#3787F4",
										fontSize: 17,
										marginBottom: 4,
										marginLeft: 5,
									}}>
									{"Build ARJUN Tank"}
								</Text>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										height: 121,
										marginBottom: 62,
									}}
								/>
								<View 
									style={{
										width: 62,
										height: 20,
										alignItems: "center",
										backgroundColor: "#D9D9D9",
										borderRadius: 3,
										paddingVertical: 5,
										marginHorizontal: 6,
									}}>
									<Text 
										style={{
											color: "#3D3251",
											fontSize: 10,
										}}>
										{"BUY NOW"}
									</Text>
								</View>
							</View>
							<Text 
								style={{
									marginTop: -86,
									marginHorizontal: 9,
								}}>
								{"Level : 1\nPrice : 2167 INR\nSave 10.0% with this discount offer!"}
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