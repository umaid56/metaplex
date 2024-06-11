


`~/.config/solana/id.json`
`solana config get`


###
`solana config set --keypair ~/.config/solana/id2.json`



###
1. `Create Auction House`
2. `ts-node auction-house-cli.ts create_auction_house --keypair ~/.config/solana/id2.json  -e devnet -sfbp 1000 -ccsp false -rso false`
3. OUtput: `AEu61X5fGG6X5VyMZPJvBwxjjs3cZKaLgZJcYTeCngTw`


###

`ts-node auction-house-cli.ts show -k ~/.config/solana/id2.json  -ah AEu61X5fGG6X5VyMZPJvBwxjjs3cZKaLgZJcYTeCngTw`


###
`solana airdrop 2 fee_payer_address`


###
`solana config set --keypair ~/.config/solana/id.json`



###
`ts-node auction-house-cli.ts sell   -k ~/.config/solana/id.json -ah AEu61X5fGG6X5VyMZPJvBwxjjs3cZKaLgZJcYTeCngTw   --buy-price 1   --mint HvGmYwvvjDTC5jGvJEt2Ky3h3ZUsxbjUFYeL9U1BMKSs --token-size 1`



###
`solana config set --keypair ~/.config/solana/id2.json`



###
`ts-node auction-house-cli.ts buy   -k ~/.config/solana/id2.json   -ah AEu61X5fGG6X5VyMZPJvBwxjjs3cZKaLgZJcYTeCngTw   --buy-price 1   --token-size 1   --mint Hop3QqwxWBnYo5o4ZBMqM2wVahEoRCmZdTzF3u5qgVDJ`


###
`ts-node auction-house-cli.ts execute_sale -k ~/.config/solana/id.json -ah AEu61X5fGG6X5VyMZPJvBwxjjs3cZKaLgZJcYTeCngTw --buy-price 1 --mint HvGmYwvvjDTC5jGvJEt2Ky3h3ZUsxbjUFYeL9U1BMKSs  --buyer-wallet 79cNdF4pA4YQeNG4S46JekbKrwvjgZ1SSM229nKVaKLL --seller-wallet 2R8UAanGZpZSYcFrzkyKfm2Z5Eu8MjkFR51h6xkLCuiG --token-size 1`

Output:
`wallet public key: 2R8UAanGZpZSYcFrzkyKfm2Z5Eu8MjkFR51h6xkLCuiG`
`Using cluster devnet`
`Accepted 1 13hnmkK68rLxJG1F8tWSBh1EJ6UjcSpXsf5HdT3E2Yfz sale from wallet 2R8UAanGZpZSYcFrzkyKfm2Z5Eu8MjkFR51h6xkLCuiG to 79cNdF4pA4YQeNG4S46JekbKrwvjgZ1SSM229nKVaKLL for 1 from your account with Auction House AEu61X5fGG6X5VyMZPJvBwxjjs3cZKaLgZJcYTeCngTw`


###
`spl-token accounts`


###
When using the JS SDK, the authority of a Auction House will always default to the wallet being used to create the Auction House. You may explicitly set this authority by providing a valid signer to the authority property.

treasuryMint: This defines the mint account of the SPL-token to be used as the currency of exchange in the marketplace. Most marketplaces on Solana usually use SOL as the currency of exchange and for trading assets. Using this setting, the authority of the Auction House can set any SPL-token to be used to buy and sell assets on the given marketplace.

sellerFeeBasisPoints: This defines the secondary sale royalties that a marketplace receives on each sale of every asset on the given marketplace. 250 means 2.5% royalty share.

auctionHouseFeeAccount: The public key of the fee account which stores funds for paying for Auction House related transactions on behalf of the users.

auctionHouseTreasury: The public key of the treasury account which stores the funds received on every sale, as marketplace royalty.

There are other accounts that are not created by the Auction House program, but are essential for withdrawing different types of funds from the Auction House, back to the authority:

feeWithdrawalDestination: The public key of the account to which the funds can be withdrawn from the fee account.

treasuryWithdrawalDestination: The public key of the account to which the funds can be withdrawn from the treasury account.

