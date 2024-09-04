import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
  Keypair,
  clusterApiUrl,
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, AuthorityType } from '@solana/spl-token';

export class ClaudeTokenClientTestnet {
  connection: Connection;
  programId: PublicKey;

  constructor() {
    // Testnet connection and program ID
    this.connection = new Connection(clusterApiUrl('testnet'), 'confirmed');
    this.programId = new PublicKey('YOUR_TESTNET_PROGRAM_ID_HERE');
  }

  // ... (rest of the methods remain the same)

  // Helper method to create and send transaction
  private async sendTransaction(
    instruction: TransactionInstruction,
    signers: Keypair[]
  ): Promise<string> {
    const transaction = new Transaction().add(instruction);
    return sendAndConfirmTransaction(this.connection, transaction, signers);
  }
}