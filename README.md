# Claude Token - Comprehensive Solana Token Guide

This guide provides a detailed walkthrough for setting up, deploying, and interacting with the Claude token on Solana's devnet, testnet, and mainnet, using Visual Studio Code on Windows.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial System Setup](#initial-system-setup)
3. [Project Structure](#project-structure)
4. [Project Setup](#project-setup)
5. [Token Program Development](#token-program-development)
6. [Deployment](#deployment)
7. [Interacting with the Token](#interacting-with-the-token)
8. [Security Considerations](#security-considerations)
9. [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)
11. [License](#license)

## Prerequisites

Ensure your system meets these requirements:
- Windows 10 or later
- Administrator access to your PC
- Stable internet connection

## Initial System Setup

Important: If at any point during this setup you encounter a "command not found" error, please refer to step 15 for instructions on setting up your system's PATH.

1. Install Visual Studio Code:
   - Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
   - Run the installer and follow the prompts

2. Install Chocolatey:
   - Open PowerShell as Administrator
   - Run the following command:
     ```powershell
     Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
     ```

3. Install Git:
   ```powershell
   choco install git -y
   ```

4. Install Node.js (includes npm):
   ```powershell
   choco install nodejs -y
   ```

5. Install Yarn:
   ```powershell
   choco install yarn -y
   ```

6. Install Rust:
   ```powershell
   choco install rust -y
   ```

7. Install Rust toolchain for Solana:
   ```powershell
   rustup toolchain install nightly
   rustup component add rust-src
   ```

8. Install Build Tools for Visual Studio 2019:
   ```powershell
   choco install visualstudio2019buildtools -y
   ```

9. Install Solana CLI:
   ```powershell
   choco install solana -y
   ```

10. Configure Solana CLI:
    ```powershell
    solana config set --url https://api.devnet.solana.com
    ```

11. Install Anchor CLI:
    ```powershell
    cargo install --git https://github.com/project-serum/anchor anchor-cli --locked
    ```

12. Install Solana Program Library (SPL) Token CLI:
    ```powershell
    cargo install spl-token-cli
    ```

13. Verify installations:
    ```powershell
    git --version
    node --version
    npm --version
    yarn --version
    rustc --version
    cargo --version
    solana --version
    anchor --version
    spl-token --version
    ```

14. (Optional) Generate a new Solana keypair:
    ```powershell
    solana-keygen new
    ```

15. Set up environment variables:
    
    If you encounter any "command not found" errors during the above steps, you may need to add the installed programs to your system's PATH. Here's a PowerShell script that will add the most common paths:

    ```powershell
    # Add to PATH
    $env:Path += ";C:\Program Files\Git\cmd"
    $env:Path += ";C:\Program Files\nodejs"
    $env:Path += ";C:\Users\$env:USERNAME\AppData\Roaming\npm"
    $env:Path += ";C:\Users\$env:USERNAME\.cargo\bin"
    $env:Path += ";C:\Program Files\Rust stable MSVC 1.69\bin"
    $env:Path += ";C:\Program Files\solana\bin"

    # Make the changes permanent
    [Environment]::SetEnvironmentVariable("Path", $env:Path, [EnvironmentVariableTarget]::User)

    # Refresh the PowerShell session's PATH
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    ```

    Run this script in PowerShell as an administrator. After running, close and reopen your PowerShell window for the changes to take effect.

Note: The exact paths may vary depending on your system and where each program was installed. Adjust the paths as necessary if you encounter issues.

## Project Structure

claude-token/
├── Cargo.toml
├── src/
│   ├── lib.rs
│   ├── client.ts
│   ├── client.testnet.ts
│   ├── client.mainnet.ts
│   └── client.devnet.ts
├── security.txt
└── README.md