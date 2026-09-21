# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Remove product
- Location: tests/Cart.spec.js:51:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: "2"
Received: "1"
```

# Page snapshot

```yaml
- generic [active] [ref=f40e1]:
  - link "Skip to content" [ref=f40e2] [cursor=pointer]:
    - /url: "#MainContent"
  - generic [ref=f40e5]:
    - generic [ref=f40e7]:
      - link "SALE & TRAVEL DEALS UP TO 50% OFF* | SHOP NOW" [ref=f40e9] [cursor=pointer]:
        - /url: /collections/sale-travel-deals
        - paragraph [ref=f40e10]:
          - text: SALE & TRAVEL DEALS UP TO 50% OFF* |
          - generic [ref=f40e11]: SHOP NOW
      - link "UP TO 40% OFF* TRAVEL | SHOP NOW" [ref=f40e13] [cursor=pointer]:
        - /url: /collections/travel
        - paragraph [ref=f40e14]:
          - text: UP TO 40% OFF* TRAVEL |
          - generic [ref=f40e15]: SHOP NOW
      - link "STRAND+ $30 OFF LEATHER & GUESS | LEARN MORE" [ref=f40e17] [cursor=pointer]:
        - /url: /pages/competition-terms-conditions
        - paragraph [ref=f40e18]:
          - text: STRAND+ $30 OFF LEATHER & GUESS |
          - generic [ref=f40e19]: LEARN MORE
    - button "" [ref=f40e20] [cursor=pointer]
  - banner [ref=f40e22]:
    - generic [ref=f40e23]:
      - generic [ref=f40e26]:
        - generic [ref=f40e27]:
          - generic [ref=f40e28]:
            - link "Strandbags":
              - /url: /
              - img "Strandbags" [ref=f40e29] [cursor=pointer]
            - generic [ref=f40e30]: Strandbags
          - navigation [ref=f40e31]:
            - menu [ref=f40e32]:
              - menuitem "Store Locator" [ref=f40e34] [cursor=pointer]
              - menuitem "Help Center" [ref=f40e37] [cursor=pointer]
              - menuitem "Wishlist" [ref=f40e40] [cursor=pointer]
            - menu [ref=f40e42]:
              - button "Search" [ref=f40e43] [cursor=pointer]
              - menuitem "Account" [ref=f40e45] [cursor=pointer]
              - link "1" [ref=f40e47] [cursor=pointer]:
                - /url: /cart
        - menu [ref=f40e51]:
          - menuitem "Sale & Travel Deals" [ref=f40e53] [cursor=pointer]
          - menuitem "New Arrivals" [ref=f40e54] [cursor=pointer]
          - menuitem "Travel" [ref=f40e55] [cursor=pointer]
          - menuitem "Bags" [ref=f40e56] [cursor=pointer]
          - menuitem "Accessories" [ref=f40e57] [cursor=pointer]
      - generic: 
      - text: 
  - generic [ref=f40e61]:
    - link [ref=f40e63] [cursor=pointer]:
      - /url: /pages/deliveries-and-returns
      - paragraph [ref=f40e64]: NEED IT FAST? TRY 3-HOUR CLICK & COLLECT*
    - link [ref=f40e66] [cursor=pointer]:
      - /url: /collections/new-in
      - paragraph [ref=f40e67]: ENJOY FREE DELIVERY* ON ORDERS $99+
    - link [ref=f40e69] [cursor=pointer]:
      - /url: /pages/price-match-policy
      - paragraph [ref=f40e70]: SEEN IT FOR LESS? WE WILL PRICE MATCH*
  - main [ref=f40e71]:
    - article [ref=f40e72]:
      - generic [ref=f40e74]:
        - navigation "breadcrumb" [ref=f40e77]:
          - list [ref=f40e78]:
            - listitem [ref=f40e79]:
              - link "Home" [ref=f40e80] [cursor=pointer]:
                - /url: https://www.strandbags.com.au
            - listitem [ref=f40e81]:
              - text: /
              - generic [ref=f40e82]: My Bag
        - generic [ref=f40e83]:
          - heading "My Bag" [level=1] [ref=f40e85]
          - generic [ref=f40e88]:
            - generic [ref=f40e89]:
              - generic [ref=f40e91]:
                - link [ref=f40e93] [cursor=pointer]:
                  - /url: /products/nere-stori-check-in-75cm-suitcase-3227450?variant=46380135022750
                  - img "Stori Check-In 75cm Suitcase" [ref=f40e94]
                - generic [ref=f40e95]:
                  - generic [ref=f40e96]: Nere
                  - link "Stori Check-In 75cm Suitcase" [ref=f40e97] [cursor=pointer]:
                    - /url: /products/nere-stori-check-in-75cm-suitcase-3227450?variant=46380135022750
                  - generic [ref=f40e98]:
                    - generic [ref=f40e99]: "Price:"
                    - generic [ref=f40e100]:
                      - generic [ref=f40e101]: $161.40
                      - generic [ref=f40e102]: $134.50
                  - generic [ref=f40e103]:
                    - generic [ref=f40e104]: "Quantity:"
                    - generic [ref=f40e106]:
                      - link "-" [ref=f40e107] [cursor=pointer]:
                        - /url: "javascript:"
                      - spinbutton [ref=f40e108]: "1"
                      - link "+" [ref=f40e109] [cursor=pointer]:
                        - /url: "javascript:"
                  - generic [ref=f40e110]:
                    - generic [ref=f40e111]: "Subtotal:"
                    - generic [ref=f40e112]: $134.50
                  - button [ref=f40e113] [cursor=pointer]
                  - button [ref=f40e116] [cursor=pointer]
              - generic [ref=f40e122]:
                - generic [ref=f40e123]:
                  - generic [ref=f40e124]: You removed
                  - generic [ref=f40e125]: Stori Check-In 75cm Suitcase
                - button "Undo" [ref=f40e126] [cursor=pointer]
            - complementary [ref=f40e131]:
              - heading "Summary" [level=2] [ref=f40e132]
              - generic [ref=f40e133]:
                - generic [ref=f40e134]:
                  - generic [ref=f40e135]:
                    - generic [ref=f40e136]: Subtotal
                    - generic [ref=f40e137]: $134.50
                  - paragraph [ref=f40e138]: Shipping charges calculated at checkout.
                  - generic [ref=f40e139]:
                    - generic [ref=f40e140]: Total
                    - generic [ref=f40e141]: $134.50
                - generic [ref=f40e142]:
                  - heading "Loyalty Voucher" [level=3] [ref=f40e143]
                  - generic [ref=f40e144]:
                    - generic [ref=f40e145]: Loyalty Voucher
                    - textbox "Loyalty Voucher" [ref=f40e146]
                  - button "Apply" [ref=f40e147] [cursor=pointer]
                - paragraph [ref=f40e149]:
                  - text: If you’re trying to apply a loyalty voucher,
                  - link "please login first" [ref=f40e150] [cursor=pointer]:
                    - /url: /account/login?return_url=/cart
                  - text: .
                - paragraph [ref=f40e151]: Giftcards entered at checkout.
                - button "PROCEED TO CHECKOUT" [ref=f40e152] [cursor=pointer]
          - link "Continue Shopping" [ref=f40e155] [cursor=pointer]:
            - /url: /
    - generic [ref=f40e156]:
      - heading "SUGGESTED FOR YOU" [level=2] [ref=f40e158]
      - generic [ref=f40e161]:
        - generic [ref=f40e166]:
          - link [ref=f40e167] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-75cm-suitcase-3212099
            - generic [ref=f40e168]:
              - img "Stori Check-In 75cm Suitcase" [ref=f40e169]
              - img "Stori Check-In 75cm Suitcase" [ref=f40e170]
              - button "Add To Bag" [ref=f40e172]
          - generic [ref=f40e174]:
            - generic [ref=f40e175]: Nere
            - link [ref=f40e177] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-75cm-suitcase-3212099
              - heading "Stori Check-In 75cm Suitcase" [level=3] [ref=f40e178]
          - generic [ref=f40e181]:
            - generic [ref=f40e182]: $269.00
            - generic [ref=f40e183]: $161.40
            - generic [ref=f40e184]: $134.50
        - generic [ref=f40e189]:
          - link [ref=f40e190] [cursor=pointer]:
            - /url: /products/nere-stori-carry-on-55cm-suitcase-3227452
            - generic [ref=f40e191]:
              - img "Stori Carry-On 55cm Suitcase" [ref=f40e192]
              - img "Stori Carry-On 55cm Suitcase" [ref=f40e193]
              - button "Add To Bag" [ref=f40e195]
          - generic [ref=f40e197]:
            - generic [ref=f40e198]: Nere
            - link [ref=f40e200] [cursor=pointer]:
              - /url: /products/nere-stori-carry-on-55cm-suitcase-3227452
              - heading "Stori Carry-On 55cm Suitcase" [level=3] [ref=f40e201]
          - generic [ref=f40e204]:
            - generic [ref=f40e205]: $219.00
            - generic [ref=f40e206]: $131.40
            - generic [ref=f40e207]: $109.50
        - generic [ref=f40e212]:
          - link [ref=f40e213] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-75cm-suitcase-3204720
            - generic [ref=f40e214]:
              - img "Stori Check-In 75cm Suitcase" [ref=f40e215]
              - img "Stori Check-In 75cm Suitcase" [ref=f40e216]
              - button "Add To Bag" [ref=f40e218]
          - generic [ref=f40e220]:
            - generic [ref=f40e221]: Nere
            - link [ref=f40e223] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-75cm-suitcase-3204720
              - heading "Stori Check-In 75cm Suitcase" [level=3] [ref=f40e224]
          - generic [ref=f40e227]:
            - generic [ref=f40e228]: $269.00
            - generic [ref=f40e229]: $161.40
            - generic [ref=f40e230]: $134.50
        - generic [ref=f40e235]:
          - link [ref=f40e236] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-75cm-suitcase-3208386
            - generic [ref=f40e237]:
              - img "Stori Check-In 75cm Suitcase" [ref=f40e238]
              - img "Stori Check-In 75cm Suitcase" [ref=f40e239]
              - button "Add To Bag" [ref=f40e241]
          - generic [ref=f40e243]:
            - generic [ref=f40e244]: Nere
            - link [ref=f40e246] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-75cm-suitcase-3208386
              - heading "Stori Check-In 75cm Suitcase" [level=3] [ref=f40e247]
          - generic [ref=f40e250]:
            - generic [ref=f40e251]: $269.00
            - generic [ref=f40e252]: $161.40
        - generic [ref=f40e257]:
          - link [ref=f40e258] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-65cm-suitcase-3227451
            - generic [ref=f40e259]:
              - img "Stori Check-In 65cm Suitcase" [ref=f40e260]
              - img "Stori Check-In 65cm Suitcase" [ref=f40e261]
              - button "Add To Bag" [ref=f40e263]
          - generic [ref=f40e265]:
            - generic [ref=f40e266]: Nere
            - link [ref=f40e268] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-65cm-suitcase-3227451
              - heading "Stori Check-In 65cm Suitcase" [level=3] [ref=f40e269]
          - generic [ref=f40e272]:
            - generic [ref=f40e273]: $259.00
            - generic [ref=f40e274]: $155.40
            - generic [ref=f40e275]: $129.50
        - generic [ref=f40e280]:
          - link [ref=f40e281] [cursor=pointer]:
            - /url: /products/nere-rfid-pu-passport-cover-3220089
            - generic [ref=f40e282]:
              - img "RFID PU Passport Cover" [ref=f40e283]
              - img "RFID PU Passport Cover" [ref=f40e284]
              - button "Add To Bag" [ref=f40e286]
          - generic [ref=f40e288]:
            - generic [ref=f40e289]: Nere
            - link [ref=f40e291] [cursor=pointer]:
              - /url: /products/nere-rfid-pu-passport-cover-3220089
              - heading "RFID PU Passport Cover" [level=3] [ref=f40e292]
          - generic [ref=f40e293]: $14.99
        - generic [ref=f40e301]:
          - link [ref=f40e302] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-75cm-suitcase-3227458
            - generic [ref=f40e303]:
              - img "Stori Check-In 75cm Suitcase" [ref=f40e304]
              - img "Stori Check-In 75cm Suitcase" [ref=f40e305]
              - button "Add To Bag" [ref=f40e307]
          - generic [ref=f40e309]:
            - generic [ref=f40e310]: Nere
            - link [ref=f40e312] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-75cm-suitcase-3227458
              - heading "Stori Check-In 75cm Suitcase" [level=3] [ref=f40e313]
          - generic [ref=f40e316]:
            - generic [ref=f40e317]: $269.00
            - generic [ref=f40e318]: $161.40
        - generic [ref=f40e323]:
          - link [ref=f40e324] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-75cm-suitcase-3225888
            - generic [ref=f40e325]:
              - img "Stori Check-In 75cm Suitcase" [ref=f40e326]
              - img "Stori Check-In 75cm Suitcase" [ref=f40e327]
              - button "Add To Bag" [ref=f40e329]
          - generic [ref=f40e331]:
            - generic [ref=f40e332]: Nere
            - link [ref=f40e334] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-75cm-suitcase-3225888
              - heading "Stori Check-In 75cm Suitcase" [level=3] [ref=f40e335]
          - generic [ref=f40e338]:
            - generic [ref=f40e339]: $269.00
            - generic [ref=f40e340]: $161.40
        - generic [ref=f40e345]:
          - link [ref=f40e346] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-75cm-suitcase-3225896
            - generic [ref=f40e347]:
              - img "Stori Check-In 75cm Suitcase" [ref=f40e348]
              - img "Stori Check-In 75cm Suitcase" [ref=f40e349]
              - button "Add To Bag" [ref=f40e351]
          - generic [ref=f40e353]:
            - generic [ref=f40e354]: Nere
            - link [ref=f40e356] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-75cm-suitcase-3225896
              - heading "Stori Check-In 75cm Suitcase" [level=3] [ref=f40e357]
          - generic [ref=f40e360]:
            - generic [ref=f40e361]: $269.00
            - generic [ref=f40e362]: $161.40
        - generic [ref=f40e367]:
          - link [ref=f40e368] [cursor=pointer]:
            - /url: /products/nere-packing-cubes-5-pack-3227518
            - generic [ref=f40e369]:
              - img "Packing Cubes 5 Pack" [ref=f40e370]
              - img "Packing Cubes 5 Pack" [ref=f40e371]
              - button "Add To Bag" [ref=f40e373]
          - generic [ref=f40e375]:
            - generic [ref=f40e376]: Nere
            - link [ref=f40e378] [cursor=pointer]:
              - /url: /products/nere-packing-cubes-5-pack-3227518
              - heading "Packing Cubes 5 Pack" [level=3] [ref=f40e379]
          - generic [ref=f40e382]:
            - generic [ref=f40e383]: $39.99
            - generic [ref=f40e384]: $23.99
            - generic [ref=f40e385]: $19.99
        - generic [ref=f40e390]:
          - link [ref=f40e391] [cursor=pointer]:
            - /url: /products/nere-stori-vanity-case-3210368
            - generic [ref=f40e392]:
              - img "Stori Vanity Case" [ref=f40e393]
              - img "Stori Vanity Case" [ref=f40e394]
              - button "Add To Bag" [ref=f40e396]
          - generic [ref=f40e398]:
            - generic [ref=f40e399]: Nere
            - link [ref=f40e401] [cursor=pointer]:
              - /url: /products/nere-stori-vanity-case-3210368
              - heading "Stori Vanity Case" [level=3] [ref=f40e402]
          - generic [ref=f40e403]: $79.99
        - generic [ref=f40e411]:
          - link [ref=f40e412] [cursor=pointer]:
            - /url: /products/nere-silicone-passport-cover-3211414
            - generic [ref=f40e413]:
              - img "Silicone Passport Cover" [ref=f40e414]
              - img "Silicone Passport Cover" [ref=f40e415]
              - button "Add To Bag" [ref=f40e417]
          - generic [ref=f40e419]:
            - generic [ref=f40e420]: Nere
            - link [ref=f40e422] [cursor=pointer]:
              - /url: /products/nere-silicone-passport-cover-3211414
              - heading "Silicone Passport Cover" [level=3] [ref=f40e423]
          - generic [ref=f40e426]:
            - generic [ref=f40e427]: $9.99
            - generic [ref=f40e428]: $6.99
            - generic [ref=f40e429]: $4.99
        - generic [ref=f40e434]:
          - link [ref=f40e435] [cursor=pointer]:
            - /url: /products/flylite-spin-air-4-83cm-suitcase-3209024
            - generic [ref=f40e436]:
              - img "Spin Air 4 83cm Suitcase" [ref=f40e437]
              - img "Spin Air 4 83cm Suitcase" [ref=f40e438]
              - button "Add To Bag" [ref=f40e440]
          - generic [ref=f40e442]:
            - generic [ref=f40e443]: Flylite
            - link [ref=f40e445] [cursor=pointer]:
              - /url: /products/flylite-spin-air-4-83cm-suitcase-3209024
              - heading "Spin Air 4 83cm Suitcase" [level=3] [ref=f40e446]
          - generic [ref=f40e449]:
            - generic [ref=f40e450]: $270.00
            - generic [ref=f40e451]: $162.00
            - generic [ref=f40e452]: $135.00
        - generic [ref=f40e457]:
          - link [ref=f40e458] [cursor=pointer]:
            - /url: /products/nere-packing-cubes-5-pack-3227516
            - generic [ref=f40e459]:
              - img "Packing Cubes 5 Pack" [ref=f40e460]
              - img "Packing Cubes 5 Pack" [ref=f40e461]
              - button "Add To Bag" [ref=f40e463]
          - generic [ref=f40e465]:
            - generic [ref=f40e466]: Nere
            - link [ref=f40e468] [cursor=pointer]:
              - /url: /products/nere-packing-cubes-5-pack-3227516
              - heading "Packing Cubes 5 Pack" [level=3] [ref=f40e469]
          - generic [ref=f40e470]: $39.99
        - generic [ref=f40e478]:
          - link [ref=f40e479] [cursor=pointer]:
            - /url: /products/nere-packing-cubes-5-pack-3213130
            - generic [ref=f40e480]:
              - img "Packing Cubes 5 Pack" [ref=f40e481]
              - img "Packing Cubes 5 Pack" [ref=f40e482]
              - button "Add To Bag" [ref=f40e484]
          - generic [ref=f40e486]:
            - generic [ref=f40e487]: Nere
            - link [ref=f40e489] [cursor=pointer]:
              - /url: /products/nere-packing-cubes-5-pack-3213130
              - heading "Packing Cubes 5 Pack" [level=3] [ref=f40e490]
          - generic [ref=f40e493]:
            - generic [ref=f40e494]: $39.99
            - generic [ref=f40e495]: $23.99
            - generic [ref=f40e496]: $19.99
        - generic [ref=f40e501]:
          - link "Venture Dual Open 76cm Suitcase Add To Bag" [ref=f40e502] [cursor=pointer]:
            - /url: /products/nere-venture-dual-open-76cm-suitcase-3217612
            - generic [ref=f40e503]:
              - img "Venture Dual Open 76cm Suitcase" [ref=f40e504]
              - button "Add To Bag" [ref=f40e508]
          - generic [ref=f40e510]:
            - generic [ref=f40e511]: Nere
            - link [ref=f40e513] [cursor=pointer]:
              - /url: /products/nere-venture-dual-open-76cm-suitcase-3217612
              - heading "Venture Dual Open 76cm Suitcase" [level=3] [ref=f40e514]
          - generic [ref=f40e517]:
            - generic [ref=f40e518]: $299.00
            - generic [ref=f40e519]: $179.40
        - generic [ref=f40e524]:
          - link [ref=f40e525] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-75cm-suitcase-3225884
            - generic [ref=f40e526]:
              - img "Stori Check-In 75cm Suitcase" [ref=f40e527]
              - img "Stori Check-In 75cm Suitcase" [ref=f40e528]
              - button "Add To Bag" [ref=f40e530]
          - generic [ref=f40e532]:
            - generic [ref=f40e533]: Nere
            - link [ref=f40e535] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-75cm-suitcase-3225884
              - heading "Stori Check-In 75cm Suitcase" [level=3] [ref=f40e536]
          - generic [ref=f40e539]:
            - generic [ref=f40e540]: $269.00
            - generic [ref=f40e541]: $161.40
        - generic [ref=f40e546]:
          - link [ref=f40e547] [cursor=pointer]:
            - /url: /products/nere-stori-check-in-65cm-suitcase-3212100
            - generic [ref=f40e548]:
              - img "Stori Check-In 65cm Suitcase" [ref=f40e549]
              - img "Stori Check-In 65cm Suitcase" [ref=f40e550]
              - button "Add To Bag" [ref=f40e552]
          - generic [ref=f40e554]:
            - generic [ref=f40e555]: Nere
            - link [ref=f40e557] [cursor=pointer]:
              - /url: /products/nere-stori-check-in-65cm-suitcase-3212100
              - heading "Stori Check-In 65cm Suitcase" [level=3] [ref=f40e558]
          - generic [ref=f40e561]:
            - generic [ref=f40e562]: $259.00
            - generic [ref=f40e563]: $155.40
            - generic [ref=f40e564]: $129.50
    - generic [ref=f40e565]:
      - heading "RELATED TO ITEMS IN YOUR CART" [level=2] [ref=f40e567]
      - generic [ref=f40e570]:
        - generic [ref=f40e575]:
          - link [ref=f40e576] [cursor=pointer]:
            - /url: /products/nere-slim-luggage-tag-3206027
            - generic [ref=f40e577]:
              - img "Slim Luggage Tag" [ref=f40e578]
              - img "Slim Luggage Tag" [ref=f40e579]
              - button "Add To Bag" [ref=f40e581]
          - generic [ref=f40e583]:
            - generic [ref=f40e584]: Nere
            - link [ref=f40e586] [cursor=pointer]:
              - /url: /products/nere-slim-luggage-tag-3206027
              - heading "Slim Luggage Tag" [level=3] [ref=f40e587]
          - generic [ref=f40e588]: $4.99
        - generic [ref=f40e596]:
          - link [ref=f40e597] [cursor=pointer]:
            - /url: /products/nere-silicone-passport-cover-3211412
            - generic [ref=f40e598]:
              - img "Silicone Passport Cover" [ref=f40e599]
              - img "Silicone Passport Cover" [ref=f40e600]
              - button "Add To Bag" [ref=f40e602]
          - generic [ref=f40e604]:
            - generic [ref=f40e605]: Nere
            - link [ref=f40e607] [cursor=pointer]:
              - /url: /products/nere-silicone-passport-cover-3211412
              - heading "Silicone Passport Cover" [level=3] [ref=f40e608]
          - generic [ref=f40e611]:
            - generic [ref=f40e612]: $9.99
            - generic [ref=f40e613]: $6.99
            - generic [ref=f40e614]: $4.99
        - generic [ref=f40e619]:
          - link [ref=f40e620] [cursor=pointer]:
            - /url: /products/nere-stori-3-pack-packing-cube-3206127
            - generic [ref=f40e621]:
              - img "Stori 3 Pack Packing Cube" [ref=f40e622]
              - img "Stori 3 Pack Packing Cube" [ref=f40e623]
              - button "Add To Bag" [ref=f40e625]
          - generic [ref=f40e627]:
            - generic [ref=f40e628]: Nere
            - link [ref=f40e630] [cursor=pointer]:
              - /url: /products/nere-stori-3-pack-packing-cube-3206127
              - heading "Stori 3 Pack Packing Cube" [level=3] [ref=f40e631]
          - generic [ref=f40e632]: $24.99
        - generic [ref=f40e640]:
          - link [ref=f40e641] [cursor=pointer]:
            - /url: /products/nere-packing-cubes-5-pack-3213130
            - generic [ref=f40e642]:
              - img "Packing Cubes 5 Pack" [ref=f40e643]
              - img "Packing Cubes 5 Pack" [ref=f40e644]
              - button "Add To Bag" [ref=f40e646]
          - generic [ref=f40e648]:
            - generic [ref=f40e649]: Nere
            - link [ref=f40e651] [cursor=pointer]:
              - /url: /products/nere-packing-cubes-5-pack-3213130
              - heading "Packing Cubes 5 Pack" [level=3] [ref=f40e652]
          - generic [ref=f40e655]:
            - generic [ref=f40e656]: $39.99
            - generic [ref=f40e657]: $23.99
            - generic [ref=f40e658]: $19.99
        - generic [ref=f40e663]:
          - link [ref=f40e664] [cursor=pointer]:
            - /url: /products/nere-stori-vanity-case-3204724
            - generic [ref=f40e665]:
              - img "Stori Vanity Case" [ref=f40e666]
              - img "Stori Vanity Case" [ref=f40e667]
              - button "Add To Bag" [ref=f40e669]
          - generic [ref=f40e671]:
            - generic [ref=f40e672]: Nere
            - link [ref=f40e674] [cursor=pointer]:
              - /url: /products/nere-stori-vanity-case-3204724
              - heading "Stori Vanity Case" [level=3] [ref=f40e675]
          - generic [ref=f40e676]: $79.99
        - generic [ref=f40e684]:
          - link "Luggage Strap Add To Bag" [ref=f40e685] [cursor=pointer]:
            - /url: /products/nere-luggage-strap-3207553
            - generic [ref=f40e686]:
              - img "Luggage Strap" [ref=f40e687]
              - button "Add To Bag" [ref=f40e691]
          - generic [ref=f40e693]:
            - generic [ref=f40e694]: Nere
            - link [ref=f40e696] [cursor=pointer]:
              - /url: /products/nere-luggage-strap-3207553
              - heading "Luggage Strap" [level=3] [ref=f40e697]
          - generic [ref=f40e698]: $9.99
        - generic [ref=f40e706]:
          - link [ref=f40e707] [cursor=pointer]:
            - /url: /products/nere-two-ways-luggage-strap-3210025
            - generic [ref=f40e708]:
              - img "Two Ways Luggage Strap" [ref=f40e709]
              - img "Two Ways Luggage Strap" [ref=f40e710]
              - button "Add To Bag" [ref=f40e712]
          - generic [ref=f40e714]:
            - generic [ref=f40e715]: Nere
            - link [ref=f40e717] [cursor=pointer]:
              - /url: /products/nere-two-ways-luggage-strap-3210025
              - heading "Two Ways Luggage Strap" [level=3] [ref=f40e718]
          - generic [ref=f40e719]: $19.99
  - contentinfo [ref=f40e724]:
    - generic [ref=f40e728]:
      - heading "Sign up & receive 10% off your first full price purchase*" [level=4] [ref=f40e729]
      - link "Sign Up" [ref=f40e730] [cursor=pointer]:
        - /url: /account/register
    - generic [ref=f40e733]:
      - generic [ref=f40e734]:
        - generic:
          - generic:
            - heading "Shop" [level=3]
          - text: 
        - navigation [ref=f40e737]:
          - menu "footermenu" [ref=f40e738]:
            - menuitem "Handbags" [ref=f40e739] [cursor=pointer]
            - menuitem "Travel" [ref=f40e740] [cursor=pointer]
            - menuitem "Luggage Sets" [ref=f40e741] [cursor=pointer]
            - menuitem "Travel Bags" [ref=f40e742] [cursor=pointer]
            - menuitem "Women's" [ref=f40e743] [cursor=pointer]
            - menuitem "Men's" [ref=f40e744] [cursor=pointer]
            - menuitem "Backpacks" [ref=f40e745] [cursor=pointer]
            - menuitem "Wallets" [ref=f40e746] [cursor=pointer]
      - generic [ref=f40e747]:
        - generic:
          - generic:
            - heading "Customer Information" [level=3]
          - text: 
        - navigation [ref=f40e750]:
          - menu "footermenu" [ref=f40e751]:
            - menuitem "Deliveries & Returns" [ref=f40e752] [cursor=pointer]
            - menuitem "Track My Order" [ref=f40e753] [cursor=pointer]
            - menuitem "Strand E-Gift Card" [ref=f40e754] [cursor=pointer]
            - menuitem "Student Discount" [ref=f40e755] [cursor=pointer]
            - menuitem "Canstar Award Winning Travel" [ref=f40e756] [cursor=pointer]
            - menuitem "FAQs" [ref=f40e757] [cursor=pointer]
            - menuitem "Corporate Orders" [ref=f40e758] [cursor=pointer]
            - menuitem "Zip Pay" [ref=f40e759] [cursor=pointer]
            - menuitem "TSA Locks" [ref=f40e760] [cursor=pointer]
      - generic [ref=f40e761]:
        - generic:
          - generic:
            - heading "About Strand" [level=3]
          - text: 
        - navigation [ref=f40e764]:
          - menu "footermenu" [ref=f40e765]:
            - menuitem "Join Our Team" [ref=f40e766] [cursor=pointer]
            - menuitem "Store Locator" [ref=f40e767] [cursor=pointer]
            - menuitem "Support" [ref=f40e768] [cursor=pointer]
            - menuitem "About Us" [ref=f40e769] [cursor=pointer]
            - menuitem "Contact Us" [ref=f40e770] [cursor=pointer]
            - menuitem "Careers" [ref=f40e771] [cursor=pointer]
            - menuitem "The Strand Journal" [ref=f40e772] [cursor=pointer]
            - menuitem "Reviews" [ref=f40e773] [cursor=pointer]
            - menuitem "AI Info" [ref=f40e774] [cursor=pointer]
      - generic [ref=f40e775]:
        - generic:
          - generic:
            - heading "Strand+ Loyalty Program" [level=3]
          - text: 
        - navigation [ref=f40e778]:
          - menu "footermenu" [ref=f40e779]:
            - menuitem "Join Our Loyalty Program" [ref=f40e780] [cursor=pointer]
            - menuitem "My Account" [ref=f40e781] [cursor=pointer]
            - menuitem "Loyalty Terms & Conditions" [ref=f40e782] [cursor=pointer]
      - generic [ref=f40e783]:
        - generic:
          - generic:
            - heading "Our Policies" [level=3]
          - text: 
        - navigation [ref=f40e786]:
          - menu "footermenu" [ref=f40e787]:
            - menuitem "Positive Impact Statement" [ref=f40e788] [cursor=pointer]
            - menuitem "Terms and Conditions" [ref=f40e789] [cursor=pointer]
            - menuitem "Terms of Trade" [ref=f40e790] [cursor=pointer]
            - menuitem "Privacy Statement" [ref=f40e791] [cursor=pointer]
            - menuitem "Price Match Policy" [ref=f40e792] [cursor=pointer]
    - generic [ref=f40e793]:
      - list [ref=f40e797]:
        - listitem [ref=f40e798]:
          - link "Facebook" [ref=f40e799] [cursor=pointer]:
            - /url: https://www.facebook.com/StrandbagsStores
        - listitem [ref=f40e801]:
          - link "Instagram" [ref=f40e802] [cursor=pointer]:
            - /url: https://www.instagram.com/strandbags/
        - listitem [ref=f40e804]:
          - link "LinkedIn" [ref=f40e805] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/strandbags-group/
      - generic [ref=f40e808]:
        - generic [ref=f40e809]:
          - generic [ref=f40e810]: Payment methods accepted
          - list [ref=f40e811]:
            - listitem [ref=f40e812]:
              - img "Visa" [ref=f40e813]
            - listitem [ref=f40e814]:
              - img "Mastercard" [ref=f40e815]
            - listitem [ref=f40e816]:
              - img "American Express" [ref=f40e817]
            - listitem [ref=f40e818]:
              - img "Paypal" [ref=f40e819]
            - listitem [ref=f40e820]:
              - img "Afterpay" [ref=f40e821]
            - listitem [ref=f40e822]:
              - img "Klarna" [ref=f40e823]
            - listitem [ref=f40e824]:
              - img "Zip" [ref=f40e825]
        - button "Back to Top" [ref=f40e827] [cursor=pointer]
        - generic [ref=f40e829]: Strandbags Group Copyright 2026.
  - generic: MY OFFERS (4)
  - region "Live chat"
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | export class Cart{
  6  | 
  7  | 
  8  |    /**
  9  |    * @param {import('@playwright/test').Page} page
  10 |    */
  11 | 
  12 |    constructor(page){
  13 | 
  14 |     this.page = page;
  15 |     this.breadcrumb = page.locator(".breadcrumb");
  16 |     this.bagTitle = page.locator(".cart-header");
  17 |     this.vendor = page.locator(".cart-item__vendor").last();
  18 |     this.productTitle = page.locator(".cart-item__title").last();
  19 |     this.productPrice = page.locator(".cart-item__value .price").first();
  20 |     this.productQuantityPlus = page.locator(".cart-item__value .field--quantity a").last();
  21 |     this.remove = page.locator(".cart-item__action").first();
  22 |     this.movetowishlist = page.locator(".cart-item__action").nth(1);
  23 |     this.emptymessage = page.locator(".cart-empty p");
  24 |     this.minicartCount = page.locator(".minicart__count");
  25 |   
  26 | 
  27 | 
  28 |    }
  29 | 
  30 |    async cartLoadCorrectly(){
  31 | 
  32 |     await expect (this.breadcrumb).toBeVisible();
  33 |     await expect (this.bagTitle).toBeVisible();
  34 |     await expect (this.vendor).toBeVisible();
  35 |     await expect (this.productTitle).toBeVisible();
  36 |     await expect (this.productPrice).toBeVisible();
  37 |     await expect (this.productQuantity).toBeVisible();
  38 |     await expect (this.remove).toBeVisible();
  39 |     await expect (this.movetowishlist).toBeVisible();
  40 | 
  41 | 
  42 | 
  43 |    }
  44 | 
  45 |    async emptycart(){
  46 | 
  47 |     let trimmessage = "";
  48 | 
  49 |     await this.remove.click();
  50 |     await this.page.waitForTimeout(2000);
  51 |     await this.remove.click();
  52 | 
  53 |     trimmessage = await this.emptymessage.textContent()
  54 |     expect (trimmessage.trim()).toEqual("Your bag is empty.");
  55 | 
  56 |    }
  57 | 
  58 |    async quantityBehavior(){
  59 | 
  60 |     await this.productQuantityPlus.click();
  61 |     await this.page.waitForTimeout(4000);
  62 | 
  63 |     expect (await this.minicartCount.textContent()).toEqual("3");
  64 | 
  65 |    }
  66 | 
  67 |    async removeProduct(){
  68 | 
  69 |     await this.remove.click();
  70 |     await this.page.waitForTimeout(4000);
  71 | 
> 72 |     expect (await this.minicartCount.textContent()).toEqual("2");
     |                                                     ^ Error: expect(received).toEqual(expected) // deep equality
  73 | 
  74 |    }
  75 | 
  76 | }
  77 | 
```