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
						height: 105,
						marginBottom: 4,
					}}>
					<View 
						style={{
							backgroundColor: "#0087D566",
							paddingTop: 27,
							paddingBottom: 4,
							paddingHorizontal: 19,
						}}>
						<View 
							style={{
								marginBottom: 34,
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
								width: 46,
								height: 2,
								backgroundColor: "#3D3251",
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
						height: 1,
						marginBottom: 3,
						marginHorizontal: 17,
					}}>
				</View>
				<ImageBackground 
					source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {'stretch'}
					style={{
						height: 200,
						paddingTop: 152,
						paddingBottom: 5,
						paddingHorizontal: 8,
						marginBottom: 18,
						marginHorizontal: 16,
					}}
					>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 11,
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 12,
							}}>
							{"05:42"}
						</Text>
						<View 
							style={{
								width: 220,
								backgroundColor: "#FFFFFF",
								borderRadius: 10,
							}}>
							<View 
								style={{
									width: 178,
									height: 2,
									backgroundColor: "#007AFF",
									borderRadius: 10,
								}}>
							</View>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 12,
							}}>
							{"08:23"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 20,
								height: 20,
								marginRight: 23,
							}}
						/>
						<View 
							style={{
								width: 13,
								backgroundColor: "#FFFFFF",
								borderRadius: 1,
								paddingHorizontal: 4,
								marginRight: 27,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 3,
									marginTop: 9,
								}}
							/>
						</View>
						<View 
							style={{
								width: 13,
								backgroundColor: "#FFFFFF",
								borderRadius: 1,
								paddingHorizontal: 4,
								marginRight: 25,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 3,
									marginTop: 9,
								}}
							/>
						</View>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 16,
								height: 11,
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
								width: 18,
								height: 18,
								marginRight: 24,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 15,
								height: 15,
								marginRight: 24,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 15,
								height: 15,
							}}
						/>
					</View>
				</ImageBackground>
				<View 
					style={{
						marginBottom: 1,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							marginBottom: 3,
						}}>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 12,
								paddingTop: 67,
								paddingBottom: 3,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 12,
									marginHorizontal: 36,
								}}>
								<Text 
									style={{
										color: "#1F2029",
										fontSize: 14,
									}}>
									{"MODULE"}
								</Text>
								<Text 
									style={{
										color: "#91919C",
										fontSize: 14,
									}}>
									{"LIVE COMMENTS"}
								</Text>
							</View>
							<View 
								style={{
									width: 96,
									height: 2,
									borderColor: "#1F2029",
									borderWidth: 2,
									marginBottom: 14,
									marginHorizontal: 18,
								}}>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 28,
									marginHorizontal: 23,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 20,
										height: 20,
										marginRight: 12,
									}}
								/>
								<View 
									style={{
										flex: 1,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 6,
										}}>
										<Image
											source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 16,
												height: 16,
											}}
										/>
										<Text 
											style={{
												color: "#1F2029",
												fontSize: 14,
											}}>
											{"01 - Welcome!"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#1F2029",
											fontSize: 12,
											marginLeft: 1,
										}}>
										{"(3:36)"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 28,
									marginHorizontal: 23,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 20,
										height: 20,
										marginRight: 12,
									}}
								/>
								<View 
									style={{
										flex: 1,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 6,
										}}>
										<Image
											source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 16,
												height: 16,
											}}
										/>
										<Text 
											style={{
												color: "#1F2029",
												fontSize: 14,
											}}>
											{"02 - What is product design?"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#1F2029",
											fontSize: 12,
											marginLeft: 1,
										}}>
										{"(13:09)"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 28,
									marginHorizontal: 23,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 20,
										height: 20,
									}}
								/>
								<View 
									style={{
										width: 230,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 6,
										}}>
										<Image
											source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 16,
												height: 16,
											}}
										/>
										<Text 
											style={{
												color: "#1F2029",
												fontSize: 14,
											}}>
											{"03 - Product designer role de..."}
										</Text>
									</View>
									<Text 
										style={{
											color: "#1F2029",
											fontSize: 12,
											marginLeft: 1,
										}}>
										{"(3:36)"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 28,
									marginHorizontal: 23,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 20,
										height: 20,
										marginRight: 12,
									}}
								/>
								<View 
									style={{
										flex: 1,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 6,
										}}>
										<Image
											source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 16,
												height: 16,
											}}
										/>
										<Text 
											style={{
												color: "#1F2029",
												fontSize: 14,
											}}>
											{"04 - A little bit of a backgrou..."}
										</Text>
									</View>
									<Text 
										style={{
											color: "#1F2029",
											fontSize: 12,
											marginLeft: 1,
										}}>
										{"(7:34)"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 28,
									marginHorizontal: 23,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 20,
										height: 20,
										marginRight: 12,
									}}
								/>
								<View 
									style={{
										flex: 1,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 6,
										}}>
										<Image
											source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 16,
												height: 16,
											}}
										/>
										<Text 
											style={{
												color: "#1F2029",
												fontSize: 14,
											}}>
											{"05 - Benefits of being a prod..."}
										</Text>
									</View>
									<Text 
										style={{
											color: "#1F2029",
											fontSize: 12,
											marginLeft: 1,
										}}>
										{"(5:12)"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 28,
									marginHorizontal: 23,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 20,
										height: 20,
										marginRight: 12,
									}}
								/>
								<View 
									style={{
										flex: 1,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 6,
										}}>
										<Image
											source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 16,
												height: 16,
											}}
										/>
										<Text 
											style={{
												color: "#1F2029",
												fontSize: 14,
											}}>
											{"06 - Is this a career for me"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#1F2029",
											fontSize: 12,
											marginLeft: 1,
										}}>
										{"(8:45)"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginHorizontal: 48,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
									}}
								/>
								<Text 
									style={{
										color: "#1F2029",
										fontSize: 14,
									}}>
									{"07 - Misconceptions about p..."}
								</Text>
							</View>
						</View>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								position: "absolute",
								bottom: -8,
								left: 23,
								width: 20,
								height: 20,
							}}
						/>
					</View>
					<Text 
						style={{
							color: "#1F2029",
							fontSize: 12,
							marginLeft: 56,
						}}>
						{"(7:22)"}
					</Text>
					<View 
						style={{
							height: 1,
							marginBottom: 3,
							marginHorizontal: 1,
						}}>
					</View>
					<View 
						style={{
							height: 1,
							marginBottom: 3,
							marginHorizontal: 1,
						}}>
					</View>
					<View 
						style={{
							height: 1,
							marginHorizontal: 1,
						}}>
					</View>
				</View>
				<View 
					style={{
						height: 1,
						marginBottom: 3,
						marginHorizontal: 17,
					}}>
				</View>
				<View 
					style={{
						height: 1,
						marginBottom: 3,
						marginHorizontal: 17,
					}}>
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