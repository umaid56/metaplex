/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
export type CreateMasterEditionArgs = {
  maxSupply: beet.COption<beet.bignum>;
};

/**
 * @category userTypes
 * @category generated
 */
export const createMasterEditionArgsBeet = new beet.FixableBeetArgsStruct<CreateMasterEditionArgs>(
  [['maxSupply', beet.coption(beet.u64)]],
  'CreateMasterEditionArgs',
);
