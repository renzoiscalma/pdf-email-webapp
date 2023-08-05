import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontFamily: "Times-Roman",
    fontSize: "12px",
    fontWeight: "bold",
    rowGap: 12,
    padding: 72,
    paddingTop: 50,
    paddingBottom: 0,
    lineHeight: 1.15,
  },
  header: {
    fontSize: "14px",
    paddingBottom: 10,
  },
  bold: {
    fontFamily: "Times-Bold",
  },
  italics: {
    fontFamily: "Times-Italic",
  },
  logoContainer: {
    display: "flex",
    paddingBottom: 20,
  },
  center: {
    alignSelf: "center",
  },
  image: {
    width: "100px",
  },
  item: {
    display: "flex",
    flexDirection: "row",
  },
  list: {
    marginLeft: 20,
  },
  serviceAddr: {
    paddingLeft: 60,
  },
  sworn: {
    marginTop: 10,
    marginBottom: 10,
  },
  signatures: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    columnGap: 20,
    marginTop: 30,
  },
  sign: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    borderTop: "1px black solid",
  },
  notary: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    columnGap: 20,
    justifyContent: "space-between",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  box: {
    width: 250,
    height: 150,
    border: "1px black solid",
  },
  notarySign: {
    justifyContent: "flex-end",
    marginRight: 20,
  },
});

interface documentProps {
  caseNumber: string;
  courtInformation: string;
  dateOfMinting: string;
  defendantNames: string[];
  transactionTimestamp: string;
  blockchainName: string;
  mintersAddr: string;
  smartContractAddr: string;
  serviceAddr: string;
  blockNumber: string;
  transactionHash: string;
  mintersName: string;
}

export const generateDocument = (data: documentProps) => {
  const doc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.logoContainer}>
          <Image style={[styles.center, styles.image]} src="./logo.png" />
        </View>
        <View style={[styles.header, styles.center, styles.bold]}>
          <Text>PROOF-OF-SERVICE AFFIDAVIT</Text>
        </View>
        <View style={styles.bold}>
          <Text>Case No.: {data.caseNumber}</Text>
          <Text>Jurisdiction: {data.courtInformation}</Text>
        </View>
        <View>
          <Text>
            I hereby certify and make return, that on {data.dateOfMinting}, I
            received documents required for service of Defendant{" "}
            {data.defendantNames.length > 0
              ? data.defendantNames.join(", ")
              : data.defendantNames[0]}
            , including the following documents:
          </Text>
        </View>
        <View style={styles.list}>
          <View style={styles.item}>
            <Text>{"\u2022" + " "}</Text>
            <Text>Notice or Summons</Text>
          </View>
          <View style={styles.item}>
            <Text>{"\u2022" + " "}</Text>
            <Text>Petition or Complaint</Text>
          </View>
          <View style={styles.item}>
            <Text>{"\u2022" + " "}</Text>
            <Text>Court Order Authorizing Alternative Service</Text>
          </View>
        </View>
        <View>
          <Text>
            And that on {data.transactionTimestamp}, I minted a non-fungible
            token (Service Token) and transferred the above document(s) from my{" "}
            {data.blockchainName} blockchain address {data.mintersAddr} via a
            Blockserve Legal Service of Process (LSOP) smart contract,{" "}
            {data.smartContractAddr}, which I directed to the following
            defendants’ addresses on the {data.blockchainName} blockchain as
            authorized by court order to the defendants’ address(es):
          </Text>
        </View>
        <View style={styles.serviceAddr}>
          <Text>{data.serviceAddr}</Text>
        </View>
        <View>
          <Text>
            Proof of service exists publicly on block {data.blockNumber},{" "}
            created at minting and resulting in transaction{" "}
            {data.transactionHash}.
          </Text>
        </View>
        <View style={styles.sworn}>
          <Text>SWORN AND SUBSCRIBED TO ME BY {data.mintersName} on:</Text>
        </View>
        <View style={styles.signatures}>
          <View style={styles.sign}>
            <Text>Process Server Signature</Text>
          </View>
          <View style={styles.sign}>
            <Text>Server Printed Name</Text>
          </View>
          <View style={styles.sign}>
            <Text>Date of Server Signature</Text>
          </View>
        </View>
        <View style={styles.notary}>
          <View style={styles.flexCol}>
            <View style={styles.box}>
              <Text> </Text>
            </View>
            <View style={[styles.italics, styles.center]}>
              <Text>Place Notary Stamp Here</Text>
            </View>
          </View>
          <View style={styles.notarySign}>
            <Text style={[styles.sign, { paddingLeft: 20, paddingRight: 20 }]}>
              Notary Public Signature
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text>1 of 1</Text>
        </View>
      </Page>
    </Document>
  );

  return doc;
};
