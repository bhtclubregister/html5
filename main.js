console.log("Game Host Loaded");

window.rewardUser = function () {
    alert("🎉 Reward Granted!");
    // Example → aap apne game ko postMessage bhej sakte ho
    let game = document.getElementById("gameframe");
    game.contentWindow.postMessage("REWARD_GRANTED", "*");
};
