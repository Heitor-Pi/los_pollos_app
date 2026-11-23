import { Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { styles } from "./style";

export const AppIcon = ({ name, color = colors.colorRed, size = 20, filled = false }) => {
  const stroke = Math.max(1.5, size * 0.09);

  if (name === "search") {
    const circleSize = size * 0.65;
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
            borderWidth: stroke,
            borderColor: color,
            position: "absolute",
            top: size * 0.1,
            left: size * 0.1,
          }}
        />
        <View
          style={{
            width: size * 0.34,
            height: stroke,
            backgroundColor: color,
            borderRadius: stroke,
            position: "absolute",
            bottom: size * 0.18,
            right: size * 0.08,
            transform: [{ rotate: "45deg" }],
          }}
        />
      </View>
    );
  }

  if (name === "home") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.56,
            height: size * 0.56,
            borderTopWidth: stroke,
            borderLeftWidth: stroke,
            borderColor: color,
            transform: [{ rotate: "45deg" }],
            position: "absolute",
            top: size * 0.2,
          }}
        />
        <View
          style={{
            width: size * 0.62,
            height: size * 0.44,
            borderLeftWidth: stroke,
            borderRightWidth: stroke,
            borderBottomWidth: stroke,
            borderColor: color,
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            position: "absolute",
            bottom: size * 0.1,
          }}
        />
      </View>
    );
  }

  if (name === "orders") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.68,
            height: size * 0.78,
            borderWidth: stroke,
            borderColor: color,
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
            gap: size * 0.11,
            paddingHorizontal: size * 0.12,
          }}
        >
          <View style={{ width: "100%", height: stroke * 0.85, backgroundColor: color }} />
          <View style={{ width: "100%", height: stroke * 0.85, backgroundColor: color }} />
          <View style={{ width: "70%", height: stroke * 0.85, backgroundColor: color, alignSelf: "flex-start" }} />
        </View>
      </View>
    );
  }

  if (name === "profile") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.36,
            height: size * 0.36,
            borderRadius: (size * 0.36) / 2,
            borderWidth: stroke,
            borderColor: color,
            marginBottom: size * 0.06,
          }}
        />
        <View
          style={{
            width: size * 0.68,
            height: size * 0.34,
            borderTopLeftRadius: size * 0.34,
            borderTopRightRadius: size * 0.34,
            borderWidth: stroke,
            borderBottomWidth: 0,
            borderColor: color,
          }}
        />
      </View>
    );
  }

  if (name === "cart") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.22,
            height: stroke,
            backgroundColor: color,
            position: "absolute",
            top: size * 0.18,
            left: size * 0.05,
          }}
        />
        <View
          style={{
            width: size * 0.64,
            height: size * 0.42,
            borderWidth: stroke,
            borderColor: color,
            borderRadius: 2,
            position: "absolute",
            top: size * 0.22,
            right: size * 0.1,
          }}
        />
        <View style={{ flexDirection: "row", gap: size * 0.22, position: "absolute", bottom: size * 0.12, right: size * 0.18 }}>
          <View style={{ width: size * 0.14, height: size * 0.14, borderRadius: size * 0.07, backgroundColor: color }} />
          <View style={{ width: size * 0.14, height: size * 0.14, borderRadius: size * 0.07, backgroundColor: color }} />
        </View>
      </View>
    );
  }

  if (name === "mail") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.82,
            height: size * 0.58,
            borderWidth: stroke,
            borderColor: color,
            borderRadius: 3,
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: size * 0.56,
              height: size * 0.56,
              borderRightWidth: stroke,
              borderBottomWidth: stroke,
              borderColor: color,
              transform: [{ rotate: "45deg" }],
              marginTop: -size * 0.34,
            }}
          />
        </View>
      </View>
    );
  }

  if (name === "lock") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.46,
            height: size * 0.46,
            borderRadius: (size * 0.46) / 2,
            backgroundColor: color,
          }}
        />
      </View>
    );
  }

  if (name === "heart") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <Text style={{ fontSize: size * 0.92, color, lineHeight: size * 1.05 }}>
          {filled ? "♥" : "♡"}
        </Text>
      </View>
    );
  }

  if (name === "back") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.45,
            height: size * 0.45,
            borderLeftWidth: stroke * 1.1,
            borderBottomWidth: stroke * 1.1,
            borderColor: color,
            transform: [{ rotate: "45deg" }],
            marginLeft: size * 0.15,
          }}
        />
      </View>
    );
  }

  if (name === "chevronRight") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.42,
            height: size * 0.42,
            borderRightWidth: stroke * 1.1,
            borderTopWidth: stroke * 1.1,
            borderColor: color,
            transform: [{ rotate: "45deg" }],
            marginRight: size * 0.15,
          }}
        />
      </View>
    );
  }

  if (name === "close") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <Text style={{ fontSize: size * 0.95, color, fontWeight: "500", lineHeight: size }}>×</Text>
      </View>
    );
  }

  if (name === "chat") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.78,
            height: size * 0.64,
            borderWidth: stroke,
            borderColor: color,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center",
            gap: size * 0.1,
            paddingHorizontal: size * 0.14,
          }}
        >
          <View style={{ width: "100%", height: stroke, backgroundColor: color }} />
          <View style={{ width: "70%", height: stroke, backgroundColor: color, alignSelf: "flex-start" }} />
        </View>
      </View>
    );
  }

  if (name === "gear") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.72,
            height: size * 0.72,
            borderRadius: (size * 0.72) / 2,
            borderWidth: stroke * 1.4,
            borderStyle: "dashed",
            borderColor: color,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: size * 0.24,
              height: size * 0.24,
              borderRadius: (size * 0.24) / 2,
              borderWidth: stroke,
              borderColor: color,
            }}
          />
        </View>
      </View>
    );
  }

  if (name === "card") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.82,
            height: size * 0.6,
            borderWidth: stroke,
            borderColor: color,
            borderRadius: 3,
            justifyContent: "center",
            paddingLeft: size * 0.12,
          }}
        >
          <View style={{ width: size * 0.24, height: size * 0.18, backgroundColor: color, borderRadius: 1 }} />
        </View>
      </View>
    );
  }

  if (name === "address") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.56,
            height: size * 0.56,
            borderRadius: (size * 0.56) / 2,
            borderWidth: stroke,
            borderColor: color,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ width: size * 0.18, height: size * 0.18, borderRadius: size * 0.09, backgroundColor: color }} />
        </View>
      </View>
    );
  }

  if (name === "coupon") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.72,
            height: size * 0.52,
            borderWidth: stroke,
            borderColor: color,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ width: size * 0.18, height: size * 0.18, borderRadius: size * 0.09, backgroundColor: color }} />
        </View>
      </View>
    );
  }

  if (name === "bell") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.56,
            height: size * 0.52,
            borderTopLeftRadius: size * 0.28,
            borderTopRightRadius: size * 0.28,
            borderWidth: stroke,
            borderColor: color,
          }}
        />
        <View style={{ width: size * 0.72, height: stroke, backgroundColor: color, marginTop: 1 }} />
      </View>
    );
  }

  if (name === "help" || name === "info") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <View
          style={{
            width: size * 0.78,
            height: size * 0.78,
            borderRadius: (size * 0.78) / 2,
            borderWidth: name === "info" ? stroke : 0,
            borderColor: color,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: size * 0.65, color, fontWeight: "700", lineHeight: size * 0.78 }}>
            {name === "help" ? "?" : "i"}
          </Text>
        </View>
      </View>
    );
  }

  if (name === "arrowUpRight") {
    return (
      <View style={[styles.iconBox, { width: size, height: size }]}>
        <Text style={{ fontSize: size * 0.85, color, fontWeight: "700", lineHeight: size }}>↗</Text>
      </View>
    );
  }

  return null;
};
