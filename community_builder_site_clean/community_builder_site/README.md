# Community Builder — site vitrine

Site statique en français pour présenter le bot Discord Community Builder.

## Personnaliser le lien d'invitation
1. Ouvre `config.js`.
2. Remplace la valeur vide de `applicationId` par l'ID public de ton application Discord.
3. N'ajoute jamais le token secret du bot dans ce site.

Le lien d'invitation utilise actuellement `permissions=0` pour éviter d'accorder des permissions excessives automatiquement. Ajuste les permissions depuis le portail Discord et vérifie les besoins réels du bot avant de le partager.

## Publier sans GitHub
Tu peux déployer les fichiers avec un hébergeur statique qui permet l'envoi direct de fichiers, par exemple Cloudflare Pages via son option de téléversement direct, selon les options proposées au moment de la publication. Le site est statique : aucun serveur Python n'est nécessaire pour l'héberger.

## Être trouvé sur Google
HTTPS et l'indexation Google sont deux choses différentes. Après publication :
- ajoute le domaine dans Google Search Console ;
- vérifie la propriété du site ;
- demande l'indexation de la page d'accueil ;
- partage le site sur tes profils et communautés.
L'indexation peut prendre du temps et n'est pas garantie. Un domaine personnalisé est facultatif, mais peut aider à avoir une adresse plus mémorable.

## Fichiers
- `index.html` : contenu et référencement de base
- `style.css` : mise en page responsive
- `config.js` : ID de l'application Discord
- `script.js` : menu mobile et lien d'invitation
- `assets/community-builder-banner.png` : bannière illustrée
