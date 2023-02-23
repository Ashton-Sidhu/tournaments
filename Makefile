login:
	argocd login argo.sidhulabs.ca

argo:
	argocd app create sports --repo https://github.com/sidhulabs/tournaments --path manifests --dest-server https://kubernetes.default.svc --dest-namespace default --sync-policy auto --auto-prune
