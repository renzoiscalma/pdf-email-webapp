import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Alegreya",
  src: "./Alegreya-SemiBold.ttf",
});

const pdfStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    flexDirection: "column",
    fontFamily: "Alegreya",
    fontSize: "28px",
    fontWeight: "bold",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  details: {
    margin: 10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#F8F8F8",
    borderRadius: "26px",
  },
  logoContainer: {
    display: "flex",
  },
  center: {
    alignSelf: "center",
  },
  image: {
    width: "200px",
  },
});

interface documentProps {
  sender: string;
  recepient: string;
  transaction: string;
  contactAddress: string;
  serviceFile: string;
}

export const generateDocument = (data: documentProps) => {
  const doc = (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.logoContainer}>
          <Image style={[pdfStyles.center, pdfStyles.image]} src="./logo.png" />
        </View>
        <View style={[pdfStyles.section, pdfStyles.center]}>
          <Text>Proof Of Service Certificate</Text>
        </View>
        <View style={pdfStyles.details}>
          <View style={pdfStyles.section}>
            <Text>sender: {data.sender}</Text>
          </View>
          <View style={pdfStyles.section}>
            <Text>recepient: {data.recepient}</Text>
          </View>
          <View style={pdfStyles.section}>
            <Text>
              transaction:{" "}
              <Link src={data.transaction}>{data.transaction}</Link>
            </Text>
          </View>
          <View style={pdfStyles.section}>
            <Text>contact address: {data.contactAddress}</Text>
          </View>
          <View style={pdfStyles.section}>
            <Text>
              service file:{" "}
              <Link src={data.serviceFile}> {data.serviceFile}</Link>
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return doc;
};
