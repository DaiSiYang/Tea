package com.daisy.teabackgroundmanagementsystemspringboot.Utils;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;
import java.util.Map;

public class JwtUtil {

    // 签名密钥（使用HMAC-SHA256算法）
    private static final Key SIGNING_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // 默认过期时间（毫秒，1小时）
    private static final long EXPIRATION_TIME = 3600000L;

    /**
     * 生成JWT令牌
     *
     * @param claims 自定义载荷（键值对）
     * @return JWT字符串
     */
    public static String generateToken(Map<String, Object> claims) {
        return Jwts.builder()
                .setClaims(claims) // 设置载荷
                .setIssuedAt(new Date()) // 签发时间
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)) // 过期时间
                .signWith(SIGNING_KEY) // 签名密钥
                .compact(); // 生成JWT字符串
    }

    /**
     * 解析JWT令牌
     *
     * @param token JWT字符串
     * @return 解析后的载荷
     * @throws JwtException 如果令牌无效或过期
     */
    public static Claims parseToken(String token) throws JwtException {
        return Jwts.parserBuilder()
                .setSigningKey(SIGNING_KEY) // 设置签名密钥
                .build()
                .parseClaimsJws(token) // 解析JWT
                .getBody(); // 获取载荷
    }

    /**
     * 验证JWT是否有效
     *
     * @param token JWT字符串
     * @return true 如果令牌有效，否则 false
     */
    public static boolean isTokenValid(String token) {
        try {
            parseToken(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }
}