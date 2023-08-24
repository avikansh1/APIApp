import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SliderBox } from "react-native-image-slider-box";

const APIApp1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAPIData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/photos";
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  const item = [
    { label: "Coding", value: "Coding" },
    { label: "Sales", value: "Sales" },
    { label: "Hacking", value: "Hacking" },
    { label: "Business", value: "Business" },
    { label: "Marketing", value: "Marketing" },
    { label: "Swimming ", value: "Swimming" },
  ];

  const image = [
    require("../assets/AIJadu/Prizes/bike.jpg"),
    require("../assets/AIJadu/Prizes/cash.jpg"),
    require("../assets/AIJadu/Prizes/laptop.jpg"),
    require("../assets/AIJadu/Prizes/phone.jpg"),
  ];
  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          style={styles.sideImage}
          source={require("../assets/AIJadu/Login/sideImage.png")}
        />

        <View style={styles.headerContainer}>
          <Image
            style={{ marginTop: 8, marginLeft: 10 }}
            source={require("../assets/AIJadu/signUp/leftArrow.png")}
          />
          <Image
            style={{ marginLeft: 20 }}
            source={require("../assets/AIJadu/signUp/AILogo.png")}
          />
          <DropDownPicker
            items={item}
            open={isOpen}
            setOpen={() => {
              setIsOpen(!isOpen);
            }}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
            style={styles.dropDown}
            dropDownContainerStyle={{
              width: 200,
              marginLeft: 20,
              borderRadius: 18,
              height: 80,
            }}
          />
          <Image
            style={styles.searchImage}
            source={require("../assets/AIJadu/SignUpPage/search.png")}
          />
        </View>
        <View style={styles.winContainer}>
          <SliderBox images={image} style={styles.sliderBox} />

          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              fontWeight: "700",
              fontSize: 20,
              lineHeight: 25,
              color: "#FEA01A",
            }}
          >
            {" "}
            DO JADU & WIN{" "}
          </Text>
        </View>
        <View style={styles.apiContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: item.url }}
                  />
                  <View style={styles.itemContainerText}>
                    <Text style={{ fontWeight: "700", fontSize: 20 }}>
                      ID: {item.id}
                    </Text>
                    <Text
                      numberOfLines={3}
                      style={{ fontWeight: "400", fontSize: 10,margin:5 }}
                    >
                      TITLE: {item.title}
                    </Text>
                  </View>
                  {/* Other properties you want to display */}
                </View>
              )}
            />
          )}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
    justifyContent: "space-evenly",
  },
  sideImage: {
    alignSelf: "flex-end",
    //   zIndex: 1,
    position: "absolute",
  },
  headerContainer: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    marginTop: 30,
    // justifyContent:"space-around",
    // flexWrap:"wrap"
  },

  winContainer: {
    flex: 2,
    backgroundColor: "#fff",
    width: 360,
    alignSelf: "center",
    borderRadius: 27,
    // height:294,
  },
  dropDown: {
    width: 200,
    height: 34,
    borderRadius: 25,
    // zIndex: 1,
    // position:"absolute",
    marginLeft: 20,
  },
  searchImage: {
    position: "absolute",
    marginLeft: 340,
    // zIndex:1,
    // alignSelf:"flex-end",
    // flexDirection:"column-reverse",
    marginTop: 8,
  },
  winContainer: {
    // alignItems:"center"
    width: 388,
    height: 294,
    flex: 3,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  sliderBox: {
    alignSelf: "center",
    backgroundColor: "pink",
    height: 200,
    width: 300,
    borderRadius: 25,
    marginTop: 20,
  },
  imageContainer: {
    height: 100,
    width: 100,
  },

  apiContainer: {
    flex: 5,
    // backgroundColor: "pink",
    flexDirection: "row",
    // flexWrap:"wrap",
  },
  itemContainer: {
    margin: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: 370,
    height: 133,
    borderRadius: 25,
    flex: 1,
    justifyContent:"space-around"
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    margin: 10,
    borderRadius: 20,
  },
  itemContainerText: {
    marginTop: 17,
    flexWrap: "wrap",
    flexDirection: "row", // Add this
    flex: 1, // Add this
    marginLeft: 10,
  },
});

export default APIApp1;
