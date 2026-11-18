import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.topBar}>
        <Text style={styles.close}>×</Text>
        <Text style={styles.count}>3</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.statusRow}>
          <View style={styles.avatar}>
            <Image
              source={require("../../../../assets/images/profile.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 70,
              }}
            />
            <View style={styles.onlineDot} />
          </View>

          <View style={styles.statusBubble}>
            <Text style={styles.statusText}>⊕ What's on your mind?</Text>
          </View>
        </View>

        <Text style={styles.displayName}>elyk_12_60329 ⌄</Text>

        <View style={styles.usernameRow}>
          <Text style={styles.username}>elyk_12_60329</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>⚔️ AFPH</Text>
          </View>
          <View style={styles.badges}>
            <Text style={styles.badgeText}>+ Badges</Text>
          </View>
        </View>

        <View style={styles.editButton}>
          <Text style={styles.editText}>✎ Edit Profile</Text>
        </View>

        <View style={styles.tabs}>
          <View style={styles.tab}>
            <Text style={styles.activeTab}>Main</Text>
            <View style={styles.activeLine} />
          </View>
          <View style={styles.tab}>
            <Text style={styles.inactiveTab}>Activity</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.inactiveTab}>Wishlist</Text>
          </View>
        </View>

        <View style={styles.orbsCard}>
          <Text style={styles.cardTitle}>Orbs Balance</Text>
          <Text style={styles.cardTitle}>◇ Try Orbs</Text>
        </View>

        <Text style={styles.memberTitle}>Member Since</Text>
        <Text style={styles.memberDate}>◉ Oct 10, 2026</Text>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Friends</Text>
          <Text style={styles.cardTitle}>🐺 ›</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Note (only visible to you)</Text>
          <Text style={styles.cardTitle}>▤+</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>❀</Text>
          <Text style={styles.bottomText}>Quests</Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>♟</Text>
          <Text style={styles.bottomText}>Shop</Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>◉</Text>
          <Text style={styles.bottomText}>Nitro</Text>
        </View>
        <View style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>⚙</Text>
          <Text style={styles.bottomText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111214",
    paddingHorizontal: 22,
    paddingTop: 12,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#050607",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 25,
  },
  close: {
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 42,
  },
  count: {
    color: "#FFFFFF",
    backgroundColor: "#ED4245",
    fontSize: 17,
    fontWeight: "700",
    overflow: "hidden",
    borderRadius: 20,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 70,
    backgroundColor: "#FAA61A",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 7,
    borderColor: "#25262B",
  },
  discordLogo: {
    color: "#FFFFFF",
    fontSize: 65,
    fontWeight: "900",
  },
  onlineDot: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 29,
    height: 29,
    borderRadius: 20,
    backgroundColor: "#3BA55D",
    borderWidth: 5,
    borderColor: "#111214",
  },
  statusBubble: {
    flex: 1,
    backgroundColor: "#29292F",
    borderRadius: 30,
    padding: 17,
    marginLeft: 12,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontStyle: "italic",
  },
  displayName: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 8,
  },
  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  username: {
    color: "#FFFFFF",
    fontSize: 17,
  },
  roleBadge: {
    backgroundColor: "#25262B",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  roleText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  badges: {
    backgroundColor: "#25262B",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  editButton: {
    height: 65,
    backgroundColor: "#5865F2",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },
  editText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
  },
  tabs: {
    flexDirection: "row",
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#303036",
    marginBottom: 22,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  activeTab: {
    color: "#8794F5",
    fontSize: 17,
    fontWeight: "700",
  },
  inactiveTab: {
    color: "#B0B0B8",
    fontSize: 17,
    fontWeight: "600",
  },
  activeLine: {
    position: "absolute",
    bottom: 0,
    width: "80%",
    height: 4,
    borderRadius: 5,
    backgroundColor: "#8794F5",
  },
  orbsCard: {
    height: 105,
    borderRadius: 20,
    backgroundColor: "#202024",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  memberTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    marginBottom: 18,
  },
  memberDate: {
    color: "#D1D1D6",
    fontSize: 18,
    marginBottom: 30,
  },
  infoCard: {
    height: 105,
    borderRadius: 20,
    backgroundColor: "#202024",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 22,
  },
  bottomBar: {
    height: 90,
    borderRadius: 25,
    backgroundColor: "#202024",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  bottomItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomIcon: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  bottomText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 4,
  },
});
