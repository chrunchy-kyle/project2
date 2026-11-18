import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "../../../components/button";

const channels = [
  { icon: "👋", name: "welcome", active: true },
  { icon: "#", name: "get-account-signup-code-here" },
  { icon: "📩", name: "afph-legacy-install" },
  { icon: "💎", name: "send-pic | for-role-afph-pl..." },
  { icon: "📣", name: "faqs-commonlyasked-qu..." },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* SERVER SIDEBAR */}
      <View style={styles.serverRail}>
        <CustomButton
          title="‹"
          variant="secondary"
          onPress={() => router.replace("/login")}
          style={styles.backButton}
          textStyle={styles.backText}
        />

        {/* DISCORD MESSAGE ICON */}
        <View style={styles.messageIcon}>
          <FontAwesome5 name="discord" size={30} color="#FFFFFF" />
        </View>

        <View style={styles.railLine} />

        {/* SERVER ICONS */}
        <View style={styles.serverIcon}>
          <Text style={styles.serverEmoji}>🎮</Text>
          <Text style={styles.notification}>3</Text>
        </View>

        <View style={styles.serverIcon}>
          <Text style={styles.serverEmoji}>🍡</Text>
        </View>

        <View style={styles.addServer}>
          <Text style={styles.addText}>+</Text>
        </View>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../../../assets/images/afph-banner.jpg")}
            style={styles.banner}
            resizeMode="cover"
          />

          <View style={styles.serverInfo}>
            <Text style={styles.serverName}>Assault Fire PH Legacy 🏠 ›</Text>
            <Text style={styles.memberCount}>34,044 Members • Community</Text>
          </View>

          <View style={styles.searchRow}>
            <View style={styles.search}>
              <Text style={styles.searchText}>⌕ Search</Text>
            </View>

            <View style={styles.invite}>
              <Text style={styles.inviteText}>♟+</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.boost}>
            <Text style={styles.boostLeft}>Boost Goal 🎉</Text>
            <Text style={styles.boostRight}>70 Boosts ›</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.menuItem}>⚑ Server Guide</Text>
          <Text style={styles.menuItem}>▤ Channels & Roles</Text>

          <View style={styles.divider} />

          <Text style={styles.category}>WELCOME ⌄</Text>

          {channels.slice(0, 2).map((channel, index) => (
            <View style={styles.channel} key={index}>
              <Text
                style={[
                  styles.channelIcon,
                  channel.active && styles.activeChannel,
                ]}
              >
                {channel.icon}
              </Text>

              <Text
                style={[
                  styles.channelName,
                  channel.active && styles.activeChannel,
                ]}
              >
                {channel.name}
              </Text>
            </View>
          ))}

          <Text style={styles.category}>📌 · info-channels ⌄</Text>

          {channels.slice(2).map((channel, index) => (
            <View style={styles.channel} key={index}>
              <Text style={styles.channelIcon}>{channel.icon}</Text>
              <Text style={styles.channelName}>{channel.name}</Text>
            </View>
          ))}

          <Text style={styles.category}>📊 · ads ⌄</Text>
          <Text style={styles.newBadge}>@ NEW</Text>
        </ScrollView>

        {/* USER BAR */}
        <View style={styles.userBar}>
          <View style={styles.userAvatar}>
            <Image
              source={require("../../../../assets/images/profile.jpg")}
              style={styles.avatarImage}
            />
          </View>

          <View style={styles.userDetails}>
            <Text style={styles.username}>elyk_12_60329</Text>
            <Text style={styles.online}>Online</Text>
          </View>

          <Text style={styles.bell}>♟</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#18181C",
  },

  /* SERVER SIDEBAR */
  serverRail: {
    width: 82,
    backgroundColor: "#111214",
    alignItems: "center",
    paddingTop: 15,
  },

  backButton: {
    width: 55,
    height: 40,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "600",
  },

  messageIcon: {
    width: 55,
    height: 55,
    borderRadius: 17,
    backgroundColor: "#25262B",
    alignItems: "center",
    justifyContent: "center",
  },

  railLine: {
    width: 55,
    height: 2,
    backgroundColor: "#292A2E",
    marginVertical: 15,
  },

  serverIcon: {
    width: 55,
    height: 55,
    borderRadius: 17,
    backgroundColor: "#292A30",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  serverEmoji: {
    fontSize: 27,
  },

  notification: {
    position: "absolute",
    right: -3,
    bottom: -5,
    color: "#FFFFFF",
    backgroundColor: "#ED4245",
    borderRadius: 20,
    overflow: "hidden",
    paddingHorizontal: 7,
    fontWeight: "700",
  },

  addServer: {
    width: 55,
    height: 55,
    borderRadius: 17,
    backgroundColor: "#292A30",
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    color: "#DCDDDE",
    fontSize: 38,
  },

  /* MAIN CONTENT */
  main: {
    flex: 1,
    backgroundColor: "#1B1B20",
  },

  banner: {
    width: "100%",
    height: 145,
    backgroundColor: "#34343B",
  },

  serverInfo: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  serverName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  memberCount: {
    color: "#A5A5AD",
    fontSize: 16,
    marginTop: 5,
  },

  searchRow: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 18,
  },

  search: {
    flex: 1,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#303036",
    justifyContent: "center",
    alignItems: "center",
  },

  searchText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  invite: {
    width: 60,
    height: 55,
    borderRadius: 15,
    backgroundColor: "#303036",
    alignItems: "center",
    justifyContent: "center",
  },

  inviteText: {
    color: "#FFFFFF",
    fontSize: 25,
  },

  divider: {
    height: 1,
    backgroundColor: "#333339",
    marginHorizontal: 20,
    marginVertical: 15,
  },

  boost: {
    marginHorizontal: 20,
    height: 48,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#57415D",
    backgroundColor: "#70416D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  boostLeft: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  boostRight: {
    color: "#E7DCE8",
    fontSize: 14,
  },

  menuItem: {
    color: "#A6A6AE",
    fontSize: 19,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  category: {
    color: "#B8B8C0",
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 20,
    marginTop: 22,
    marginBottom: 15,
  },

  channel: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 57,
  },

  channelIcon: {
    color: "#92939A",
    fontSize: 23,
    width: 30,
  },

  channelName: {
    color: "#A6A6AE",
    fontSize: 17,
    flexShrink: 1,
  },

  activeChannel: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  newBadge: {
    color: "#FFFFFF",
    backgroundColor: "#ED4245",
    alignSelf: "flex-start",
    marginLeft: 20,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
    overflow: "hidden",
    fontWeight: "700",
  },

  /* USER BAR */
  userBar: {
    height: 88,
    backgroundColor: "#29292F",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  userAvatar: {
    width: 62,
    height: 62,
    borderRadius: 35,
    backgroundColor: "#FAA61A",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarImage: {
    width: 62,
    height: 62,
    borderRadius: 35,
  },

  userDetails: {
    flex: 1,
    marginLeft: 12,
  },

  username: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  online: {
    color: "#B5B5BC",
    fontSize: 14,
    marginTop: 3,
  },

  bell: {
    color: "#B5B5BC",
    fontSize: 24,
    paddingHorizontal: 10,
  },
});
