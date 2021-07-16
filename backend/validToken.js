const JwksRsa = require("jwks-rsa");
const jwt = require("jsonwebtoken");

async function isValidJwt(token) {
  try {
    // Decoding using RS256
    // Throws if verification fails
    const decoded = jwt.decode(token, { complete: true });
    if (!decoded) return false;
    const jwk = await getJsonWebKey(decoded.payload.iss, decoded.header.kid);
    if (!jwk) return false;
    jwt.verify(token, jwk, { algorithms: ["RS256"] });
    return true;
    // Error thrown if jwt.verify fails - Any errors indicates an invalid token
  } catch (e) {
    return false;
  }
}

async function getJsonWebKey(issuer, kid) {
  const client = new JwksRsa.JwksClient({
    jwksUri: issuer + "/.well-known/jwks.json",
  });
  try {
    const keys = await client.getSigningKeys();
    for (const key of keys) {
      if (key.kid === kid) {
        const publicKey = key.getPublicKey();
        return publicKey;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

module.exports = { isValidJwt };
